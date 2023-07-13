import { Button } from '@mui/base';
import { Stack } from '@mui/material';
import React from 'react'

function ItemCount({ stock, data }) {
  const [counter, setCounter] = React.useState(1);

  const handleMinus = () => {
    counter > 1 && setCounter(counter - 1);
  }

  const handdleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  const handleAddCart = () => {
    console.log({...data, counter})
    setCounter(1);
  }

  return (
    <div>
      <Stack spacing={2} direction="row" justifyContent="center">
        <button onClick={handleMinus}>-</button>
        <p>{counter}</p>
        <button onClick={handdleAdd}>+</button>
      </Stack>
      <Button onClick={handleAddCart} size="small">Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount;