"use client"
import React from 'react'
import { UpDrawerProps } from './types'
import { Drawer } from '@mui/material'

const UpDrawer = (props: UpDrawerProps) => {
    const {children} = props
  return (
    <Drawer>
          {children}
    </Drawer>
  )
}

export default UpDrawer
