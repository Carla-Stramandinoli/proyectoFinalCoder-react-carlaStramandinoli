import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function cartWidget({productos}) {
  return (
      <button style={{backgroundColor: 'inherit'}}>
      <ShoppingCartIcon /> {productos}
      </button>
  )
}

export default cartWidget;