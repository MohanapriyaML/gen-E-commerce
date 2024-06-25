"use client"
import React from 'react'
import Image from 'next/image'
import { EcImageProps } from './types'

const EcImage = ({ src, width = 300, height = 400, alt,children, ...props }:EcImageProps) => {
  return (
    <Image src={src} alt={alt} {...props}>
         {children} 
    </Image>
  )
}

export default EcImage;
