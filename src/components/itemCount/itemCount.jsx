import { Button } from '@mui/base';
import { Stack } from '@mui/material';
import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';

function ItemCount({ stock, data }) {
  const [counter, setCounter] = React.useState(1);
  const {carrito, setCarrito } = useContext(CartContext);


  const handleMinus = () => {
    counter > 1 && setCounter(counter - 1);
  }

  const handdleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  const handleAddCart = () => {
    const itemAgregado = {...data, counter};
    if (carrito.find((prod) => prod.id === itemAgregado.id)){
      console.log("esta en el carrito")
    } else {   
      setCarrito([...carrito, itemAgregado]);
      console.log("no esta en el carrito")

    }
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