"use client"
import React from 'react'
import Image from 'next/image'
import { UpImageProps } from './types'

const UpImage = ({ src, width = 300, height = 400, alt,children, ...props }:UpImageProps) => {
  return (
    <Image src={src} alt={alt} {...props}>
         {children} 
    </Image>
  )
}

export default UpImage
