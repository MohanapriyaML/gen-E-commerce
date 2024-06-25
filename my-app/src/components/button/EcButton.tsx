'use client';
import Button from '@mui/material/Button';
import { PropsWithChildren } from 'react';
import { UpButtonProps } from './types';

const EcButton = ({children }: PropsWithChildren <UpButtonProps>) => {
  return (
    <Button variant="contained" color="primary">
      {children}
    </Button>
  );
};

export default EcButton;