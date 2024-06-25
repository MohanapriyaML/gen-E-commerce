'use client';
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { EcBreadcrumbsProps } from './types';


const EcBreadcrumbs = (props: EcBreadcrumbsProps) => {
    const {
        className,
        separator = '/',
        ariaLabel = 'breadcrumb',
    } = props;


    return (
        <Breadcrumbs className={className} separator={separator} aria-label={ariaLabel}> </Breadcrumbs>
    );
};

export default EcBreadcrumbs;
