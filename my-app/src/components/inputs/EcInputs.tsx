"use client"
import React from 'react'
import { FormControl} from '@mui/material'
import { EcInputProps } from './types';

const EcInputs = (props: EcInputProps) => {
    const {children} = props;
  return (
    <FormControl>
       {children}
    </FormControl>
  )
}

export default EcInputs;
