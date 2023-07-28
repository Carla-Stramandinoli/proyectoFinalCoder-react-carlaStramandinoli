import Button from '@mui/material/Button';
import { createTheme, Stack, ThemeProvider, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';

function ItemCount({ stock, data }) {
  const [counter, setCounter] = React.useState(0);
  const { carrito, AddToCart } = useContext(CartContext);
  console.log(carrito);

  const handleMinus = () => {
    counter > 0 && setCounter(counter - 1)
    if (counter > 0){
      data.stock = data.stock + 1;
    } 
  }

  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
      data.stock = data.stock - 1;
    } else if (counter === stock){
     setCounter(counter)
    }
  }

  return (
    <div>
      <ThemeProvider theme={styleButtonGroup}>
        <Typography style={componentStyle} variant="body2" color="text.secondary">
          {
            data?.stock > 1 ?
              <>
                Quedan {data?.stock} en stock.
              </> :
              <>
                Queda {data?.stock} en stock.
              </>
          }
        </Typography>
        <Stack spacing={1} p={1} direction="row" justifyContent="center">
          <Button size="small" variant="contained" onClick={handleMinus}>-</Button>
          <Typography variant="h6">{counter}</Typography>
          <Button size="small" variant="contained" onClick={handleAdd}>+</Button>
        </Stack>
      </ThemeProvider>
      <ThemeProvider theme={styleButtonAdd}>
        <Button onClick={() => { AddToCart(data, counter); setCounter(0); }} size="small" variant="contained" >Agregar al carrito</Button>
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
})

const styleButtonAdd = createTheme({
  palette: {
    primary: {
      main: '#9E768F',
    },
  },
})

const componentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
}
