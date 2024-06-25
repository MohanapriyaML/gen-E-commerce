"use client"
import React from 'react'
import { UpDropDownProps } from './types'
import { MenuItem } from '@mui/material'

const EcDropDown = (props: UpDropDownProps) => {
    const {children} = props;
  return (
    <MenuItem>
        {children}
    </MenuItem>
  )
}

export default EcDropDown;
