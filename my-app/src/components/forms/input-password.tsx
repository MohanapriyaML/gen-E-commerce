"use client"
import { FormLabel } from '@mui/material';
import React from 'react'
import { UpFormsProps } from './types';

const FormPassword = (props: UpFormsProps) => {
    const {children} = props;
  return (
    <FormLabel>
            {children}
    </FormLabel>
  )
}

export default FormPassword;
