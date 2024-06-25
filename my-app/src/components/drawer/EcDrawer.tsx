"use client"
import React from 'react'
import { UpDrawerProps } from './types'
import { Drawer } from '@mui/material'

const EcDrawer = (props: UpDrawerProps) => {
    const {children} = props
  return (
    <Drawer>
          {children}
    </Drawer>
  )
}

export default EcDrawer;
