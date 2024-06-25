"use client"
import { Dialog } from '@mui/material'
import React from 'react'
import { UpDialogProps } from './types';

const UpDialog = (props: UpDialogProps) => {
    const {children,open} = props;
  return (
    <Dialog open={open}>
         {children}
    </Dialog>
  )
}

export default UpDialog
