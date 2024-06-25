"use clients"
import React from 'react'
import { UpPopoverProps } from './types';
import { Popover } from '@mui/material';


const UpPopOver = (props: UpPopoverProps) => {
    const {children,open} = props;
  return (
    <Popover open={open}>
      {children}
    </Popover>
  )
}

export default UpPopOver
