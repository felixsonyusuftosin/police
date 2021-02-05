import React, { useEffect, useState } from 'react'
import { MainPageProvider, useMainPageContext } from './MainPage.context'
import {
  PageContainer,
  PageHeader,
  Toolbar,
  Table,
  ColumnsHeader,
  Columns,
  Header
} from './styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Loader, useNotification } from '../commons'
import moment from 'moment'

const MainPage = () => {
  const { pageJustLoads, state } = useMainPageContext()
  const { loading, data, error, polling, accurateAsAt, errorPolling } = state
  const [headers, setHeaders] = useState(null)
  const { errorMessage } = useNotification()

  useEffect(() => {
    pageJustLoads()
  }, [pageJustLoads])

  useEffect(() => {
    if (error) {
      errorMessage(error)
    }
  }, [error, errorMessage])

  useEffect(() => {
    if (errorPolling) {
      errorMessage(errorPolling)
    }
  }, [errorPolling, errorMessage])

  useEffect(() => {
    if (data && data.columns) {
      setHeaders(Object.keys(data.columns))
    }
  }, [data])

  return (
    <PageContainer>
      <PageHeader>
        <h2> Police Postings</h2>
        {polling && (
          <>
            <span className='sub-header'>Trying to get new data ...</span>
            &nbsp; <CircularProgress size={14} color='secondary' />
          </>
        )}
        {accurateAsAt && !polling && (
          <span className='sub-header'>
            {' '}
            Accurate as at
            {moment(accurateAsAt).format('MMMM Do YYYY, h:mm:ss a')}
          </span>
        )}
        {errorPolling && (
          <span className='sub-header'>
            Could not get current data retrying in a couple of minutes
          </span>
        )}
      </PageHeader>
      {loading && <Loader />}
      {data && headers && (
        <Table>
          <ColumnsHeader numberCols={headers.length}>
            {headers.map(key => (
              <div key={key}>
                <Header>{key}</Header>
              </div>
            ))}
          </ColumnsHeader>
          {data.rows.map((row, index) => (
            <Columns key={index} numberCols={headers.length}>
              {headers.map((key, index2) => (
                <div key={`${index}--${index2}`}>
                  <span>{row[key]}</span>
                </div>
              ))}
            </Columns>
          ))}
        </Table>
      )}
    </PageContainer>
  )
}

export { MainPage, MainPageProvider, useMainPageContext }
