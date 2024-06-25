import React, { PropsWithChildren } from 'react';
import { EcTypographyProps } from './types';
import { Typography } from '@mui/material';

const EcTypography = ({
    children,
    fontStyle = 'normal',
    weight = 'normal',
    className = '',
    variant = 'p-l',
    decoration = 'none',
    color = 'primary',
    additionalProps = {},
    colorOverride = ''
}: PropsWithChildren<EcTypographyProps>) => {
    return (
        <Typography
            fontStyle={fontStyle}
            className={className}
            weight={weight}
            variant={variant}
            decoration={decoration}
            colorOverride={colorOverride}
            color={color}
            {...additionalProps}
        >
            {children}
        </Typography>
    );
};

export default EcTypography;
