"use client"
import React from 'react'
import { UpLinkProps } from './types'
import { Link } from '@mui/material'

const UpLinks = (props: UpLinkProps) => {
    const {children} = props;
  return (
    <Link>
        {children}
    </Link>
  )
}

export default UpLinks;
