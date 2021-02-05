import React, {
  createContext,
  useEffect,
  useCallback,
  useRef,
  useContext,
  useReducer,
  useMemo
} from 'react'
import { apiError } from '../utils'

const initState = {
  loading: false,
  data: null,
  error: false,
  polling: false,
  accurateAsAt: null,
  errorPolling: null
}

const POLL_INTERVAL = 900000
const SHEETAPI = process.env.REACT_APP_SHEET_API

const MainPageContext = createContext()

const actions = {
  FETCHING_POSTING_DATA: 'FETCHING_POSTING_DATA',
  FETCHED_POSTING_DATA: 'FETCHED_POSTING_DATA',
  ERROR_FETCHING_POSTING_DATA: 'ERROR_FETCHING_POSTING_DATA',
  POLLING_DATA: 'POLLING_DATA',
  ERROR_POLLING_DATA: 'ERROR_POLLING_DATA',
  POLLED_DATA: 'POLLED_DATA'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.FETCHING_POSTING_DATA:
      return { ...state, ...initState, loading: true }
    case actions.FETCHED_POSTING_DATA:
      return {
        ...state,
        ...initState,
        data: action.payload,
        accurateAsAt: new Date()
      }
    case actions.ERROR_FETCHING_POSTING_DATA:
      return { ...state, data: null, loading: false, error: action.payload }
    case actions.POLLING_DATA:
      return { ...state, polling: true }
    case actions.ERROR_POLLING_DATA:
      return { ...state, polling: false, errorPolling: action.payload }
    case actions.POLLED_DATA:
      return { ...state, data: action.payload, accurateAsAt: new Date() }
    default:
      return { ...initState }
  }
}

const useMainPageContext = () => {
  const context = useContext(MainPageContext)
  if (!context) {
    throw new Error(' Please call within a mainPageProvider')
  }
  return context
}

const MainPageProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState)
  const intervalRef = useRef(null)

  const pageJustLoads = useCallback(async () => {
    dispatch({ type: actions.FETCHING_POSTING_DATA })
    try {
      const response = await fetch(SHEETAPI)
      const { status, ok } = response
      if (ok) {
      if (status === 404) {
        dispatch({
          type: actions.ERROR_FETCHING_POSTING_DATA,
          payload: 'The requested url was not found'
        })
      }
      const data = await response.json()
      dispatch({ type: actions.FETCHED_POSTING_DATA, payload: data })
      return
    }
    const error =  apiError({ status, url: SHEETAPI })
    dispatch({
      type: actions.ERROR_FETCHING_POSTING_DATA,
      payload: error.info
    })
    
    } catch (error) {
      console.error(error.message)
      dispatch({
        type: actions.ERROR_FETCHING_POSTING_DATA,
        payload: apiError({ status: 500, url: SHEETAPI })
      })
    }
  }, [])

  const pollForData = useCallback(async () => {
    const pollReference = setInterval(async () => {
      dispatch({ type: actions.POLLING_DATA })
      try {
        const dataJSON = await fetch(SHEETAPI)
        const { status } = dataJSON
        if (status === 404) {
          dispatch({
            type: actions.ERROR_POLLING_DATA,
            payload: 'The requested url was not found'
          })
        }
        const data = await dataJSON.json()
        dispatch({ type: actions.POLLED_DATA, payload: data })
      } catch (error) {
        dispatch({ type: actions.ERROR_POLLING_DATA, payload: error.message })
      }
    }, POLL_INTERVAL)

    intervalRef.current = pollReference
  }, [])

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    pollForData()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [pollForData])

  const contextValue = useMemo(
    () => ({
      pageJustLoads,
      pollForData,
      state
    }),
    [pageJustLoads, pollForData, state]
  )

  return <MainPageContext.Provider value={contextValue} {...props} />
}

export { MainPageProvider, useMainPageContext }
