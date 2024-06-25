"use clients"
import React from 'react'
import { EcPopoverProps} from './types';
import { Popover } from '@mui/material';


const EcPopOver = (props: EcPopoverProps) => {
    const {children,open} = props;
  return (
    <Popover open={open}>
      {children}
    </Popover>
  )
}

export default EcPopOver;
