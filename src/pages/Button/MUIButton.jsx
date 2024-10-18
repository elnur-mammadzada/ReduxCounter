import React from 'react'
import Button from '@mui/material/Button';
<Button variant="contained">Contained</Button>



const MUIButton = ({ text, variant, color, onClick }) => {
    return (
        <Button onClick={onClick} color={color} variant={variant}>{text}</Button>

    )
}

export default MUIButton
