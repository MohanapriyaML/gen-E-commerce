'use client';

import * as React from 'react';
import Radio from '@mui/material/Radio';
import { PropsWithChildren } from 'react';
import { EcRadioProps } from './types';

const EcRadioButton = (props: PropsWithChildren<EcRadioProps>) => {
    const {
        name = ' ',
        value,
        disabled
    } = props;

    return (
        <Radio
            value={value}
            name={name}
            disabled={disabled}
            inputProps={{ 'aria-label': name }}
        />
    );
};

export default EcRadioButton;
