import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import  { IconButton}  from '@mui/material'


function CartWidget({ productos }) {
  return (
    <IconButton style={{ backgroundColor: 'inherit' }}>
      <ShoppingCartIcon /> {productos}
    </IconButton>
  )
}

export default CartWidget;