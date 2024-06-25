"use client"
import React from 'react';
import { FormLabel } from '@mui/material';
import { EcFormsProps } from './types';

const Input = (props:  EcFormsProps) => {
    const {children} = props;
  return (
    <FormLabel>
      {children}
    </FormLabel>
  )
}

export default Input;
