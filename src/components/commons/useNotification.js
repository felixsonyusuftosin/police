import React,{ useCallback } from 'react'
import { Button } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import CloseIcon  from '@material-ui/icons/Close'
import styled from 'styled-components'

const CloseButton = styled(Button)`
    color: white;
    margin-left: -21px;
    margin-right: -10px;
`
export const NotificationActions = key => {
  const { closeSnackbar } = useSnackbar()
  return (
    <CloseButton onClick={() => { closeSnackbar(key) }}>
      <CloseIcon />
    </CloseButton>
  )
}
const actions = NotificationActions

export const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar()

  const successMessage = useCallback(
    (text, restProps) =>
      enqueueSnackbar(text, {
        variant: 'success',
        ...restProps,
        actions,
        preventDuplicate: true
      }),
    [enqueueSnackbar]
  )

  const errorMessage = useCallback(
    (text, restProps) =>
      enqueueSnackbar(text, {
        variant: 'error',
        ...restProps,
        actions,
        preventDuplicate: true
      }),
    [enqueueSnackbar]
  )

  return { successMessage, errorMessage }
}
