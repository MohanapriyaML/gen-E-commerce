import React from 'react';

export interface UpImageProps {
    children: string | React.ReactNode;
    alt: string;
    height?: number | string;
    src: string;
    width?: number | string;
}