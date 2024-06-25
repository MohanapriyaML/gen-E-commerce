import { Select } from '@mui/material';
import React from 'react';
import { EcSelectProps } from './types';

const EcSelect = ( props: EcSelectProps) => {
    const {children,} = props;
    return (
            <Select>
                {children}
            </Select>
    );
};

export default EcSelect;
