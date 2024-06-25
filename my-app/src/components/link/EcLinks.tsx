"use client"
import React from 'react'
import { Link } from '@mui/material'
import { EcLinkProps } from './types';

const UpLinks = (props: EcLinkProps) => {
    const {children} = props;
  return (
    <Link>
        {children}
    </Link>
  )
}

export default UpLinks;
