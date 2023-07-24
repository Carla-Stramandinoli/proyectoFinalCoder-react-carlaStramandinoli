import Button from '@mui/material/Button';
import { createTheme, Stack, ThemeProvider, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';

function ItemCount({ stock, data }) {
  const [counter, setCounter] = React.useState(1);
  const { carrito, AddToCart } = useContext(CartContext);
  console.log(carrito);

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
      <ThemeProvider theme={styleButtonGroup}>

        <Stack spacing={1} p={1} direction="row" justifyContent="center">
          <Button size="small" variant="contained" onClick={handleMinus}>-</Button>
          <Typography>{counter}</Typography>
          <Button size="small" variant="contained" onClick={handdleAdd}>+</Button>
        </Stack>
      </ThemeProvider>
      <ThemeProvider theme={styleButtonAdd}>
        <Button onClick={() => { AddToCart(data, counter); setCounter(1); }} size="small" variant="contained" >Agregar al carrito</Button>
      </ThemeProvider>

    </div>
  )
}

export default ItemCount;

const styleButtonGroup = createTheme({
  palette: {
    primary: {
      main: '#9FA4C4',
    },
  },
});

const styleButtonAdd = createTheme({
  palette: {
    primary: {
      main: '#9E768F',
    },
  },
});
