import { Button, Container, Grid, IconButton, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext';
import UserComponent from '../../components/userComponent/userComponent';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmComponent from '../../components/cartComponent/confirmComponent';
import { Link } from 'react-router-dom';


function Cart() {
    const { carrito, setCarrito, allPrice, sendNewOrder, lastOrder } = useContext(CartContext);
    const [openConfirmacion, setOpenConfirmacion] = useState(false);

    const handleAbrirConfirmacion = () => {
        setOpenConfirmacion(true);
    }

    const handleCerrarConfirmacion = () => {
        setOpenConfirmacion(false);
    }

    const deleteElement = (id) => {
        const deleteElement = carrito.filter((prod) => prod.id !== id);
        setCarrito(deleteElement);
        setOpenConfirmacion(false);
    }

    return (
        <div>
            <h1 style={{ color: '#A98DD3', display: 'flex', justifyContent: 'center' }}>Carrito</h1>
            {
                carrito.length > 0 ?
                    <>
                        <Container fixed>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">Nombre</TableCell>
                                                    <TableCell align="center">Precio unitario</TableCell>
                                                    <TableCell align="center">Cantidad</TableCell>
                                                    <TableCell align="center">Precio total</TableCell>
                                                    <TableCell align="center"></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {carrito.map((prod) => (
                                                    <TableRow
                                                        key={prod.id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell align="center">
                                                            {prod.title}
                                                        </TableCell>
                                                        <TableCell align="center">{prod.price}</TableCell>
                                                        <TableCell align="center">{prod.counter}</TableCell>
                                                        <TableCell align="center">${prod.price * prod.counter}</TableCell>
                                                        <TableCell align="center">
                                                            <IconButton aria-label="delete" >
                                                                <DeleteIcon fontSize="small" onClick={handleAbrirConfirmacion} />
                                                            </IconButton>
                                                            <ConfirmComponent open={openConfirmacion}
                                                                onClose={handleCerrarConfirmacion}
                                                                onConfirm={() => deleteElement(prod.id)} />
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow>
                                                    <TableCell />
                                                    <TableCell />
                                                    <TableCell colSpan={1}>Total</TableCell>
                                                    <TableCell align="center">${allPrice()}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                                <Container>
                                    <UserComponent carrito={carrito} sendNewOrder={sendNewOrder} lastOrder={lastOrder} />
                                </Container>
                            </Grid>
                        </Container>
                    </> :
                        <Container>
                            <Grid item xs={12}>
                                <Item>
                                    <h2>El carrito esta vacio</h2>
                                    <Link to={'/'}>
                                        <CustomButtonBack size="small" variant="contained">Volver al inicio</CustomButtonBack>
                                    </Link>
                                </Item>
                            </Grid>
                        </Container>
            }
        </div>
    )
}

export default Cart;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CustomButtonBack = styled(Button)({
    backgroundColor: '#9FA4C4',
    color: 'white',
    padding: '10px 20px',
    margin: '8px',
    border: '1px solid black',
    borderRadius: '4px',
    fontSize: '16px',
    '&:hover': {
        backgroundColor: '#686D96',
    },
});