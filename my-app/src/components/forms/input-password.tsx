"use client"
import { FormLabel } from '@mui/material';
import React from 'react'
import { EcFormsProps} from './types';

const FormPassword = (props: EcFormsProps) => {
    const {children} = props;
  return (
    <FormLabel>
            {children}
    </FormLabel>
  )
}

export default FormPassword;
