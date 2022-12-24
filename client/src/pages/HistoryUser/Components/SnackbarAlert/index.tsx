import { Alert, Snackbar, useMediaQuery, useTheme } from '@mui/material'
import React, { ReactNode, useState } from 'react'

type Props = {
    children : ReactNode,
    open:boolean,
    handleClose:(event: React.SyntheticEvent | Event, reason?: string) => void
}

const SnackbarAlert = ({children,open,handleClose}: Props) => {

    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.up(700))

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}
    anchorOrigin={ 
        {horizontal:"right",vertical:"top"} 
    }
  >
    <Alert onClose={handleClose} severity="success" sx={{ width: '80%'}}>
        {children}
    </Alert>
</Snackbar>
  )
}

export default SnackbarAlert