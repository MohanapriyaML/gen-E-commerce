'use client';

import React from 'react';
import Collapse from '@mui/material/Collapse';
import { ExpandMoreProps } from './types';

const UpCollapse = (props: ExpandMoreProps) => {
    const { expanded, children } = props;
    return (
        <>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    );
};

export default UpCollapse;
