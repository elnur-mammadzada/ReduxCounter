import { TextField } from '@mui/material'
import React from 'react'

const MUITextField = ({onChange, onBlur}) => {
    return (
        <TextField onChange={onChange} onBlur={onBlur} />
    )
}

export default MUITextField
