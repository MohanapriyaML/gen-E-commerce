"use client"
import React from 'react'
import { UpFormsProps } from './types';
import { FormLabel } from '@mui/material';

const FormInputSelect = (props:  UpFormsProps) => {
    const {children} = props;
  return (
    <FormLabel>
      {children}
    </FormLabel>
  )
}

export default FormInputSelect;