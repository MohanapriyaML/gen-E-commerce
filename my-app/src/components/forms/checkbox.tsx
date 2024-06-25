"use client"
import { CheckBox } from '@mui/icons-material'
import React from 'react'
import { EcFormsProps} from './types'

const FormCheckbox = (props: EcFormsProps) => {
    const {children} = props;
  return (
    <CheckBox>
          {children}
    </CheckBox>
  )
}

export default FormCheckbox
