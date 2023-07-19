import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge, IconButton } from '@mui/material'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'


function CartWidget() {
  const {cartQuantity} = useContext(CartContext);

  return (
    <IconButton style={{ backgroundColor: 'inherit' }}>
      <Badge badgeContent={cartQuantity()} color="error">
        <ShoppingCartIcon /> 
         </Badge>
    </IconButton>
  )
}

export default CartWidget; 