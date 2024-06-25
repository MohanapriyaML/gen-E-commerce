"use client"
import React from 'react'
import { UpFormsProps } from './types';
import { FormLabel } from '@mui/material';

const Input = (props:  UpFormsProps) => {
    const {children} = props;
  return (
    <FormLabel>
      {children}
    </FormLabel>
  )
}

export default Input;
