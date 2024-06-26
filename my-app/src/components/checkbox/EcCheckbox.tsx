"use client"
import { CheckBox } from '@mui/icons-material'
import React from 'react'
import { UpCheckBoxProps } from './types'

const EcCheckbox = (props: UpCheckBoxProps) => {
    const {children} = props;
  return (
    <CheckBox>
       {children}
    </CheckBox>
  )
}

export default EcCheckbox;
