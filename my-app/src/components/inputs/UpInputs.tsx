"use client"
import React from 'react'
import { UpInputProps } from './types'
import { FormControl} from '@mui/material'

const UpInputs = (props: UpInputProps) => {
    const {children} = props;
  return (
    <FormControl>
       {children}
    </FormControl>
  )
}

export default UpInputs
