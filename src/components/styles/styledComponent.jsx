import React from 'react'
import { styled } from '@mui/material/styles'

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
    padding: 0,
    margin: '-1',
    border: 0,
    
});


