import { Button } from '@mui/base';
import React from 'react'

function ItemCount({ stock }) {
  const [counter, setCounter] = React.useState(1);

  const handleMinus = () => {
    counter > 1 && setCounter(counter - 1);
  }

  const handdleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMinus}>-</button>
        <p>{counter}</p>
        <button onClick={handdleAdd}>+</button>

      </div>
      <Button size="small">Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount;