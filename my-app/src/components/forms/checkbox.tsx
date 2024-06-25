"use client"
import { CheckBox } from '@mui/icons-material'
import React from 'react'
import { UpFormsProps } from './types'

const FormCheckbox = (props: UpFormsProps) => {
    const {children} = props;
  return (
    <CheckBox>
          {children}
    </CheckBox>
  )
}

export default FormCheckbox
