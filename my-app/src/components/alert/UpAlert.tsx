"use client"
import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { UpAlertProps } from './types'

const UpAlert = (props: UpAlertProps) => {
  const {children} = props;
  return (
    <Alert>
       <AlertTitle>title</AlertTitle>
       {children}
    </Alert>
  )
}

export default UpAlert
