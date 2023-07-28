import { Container, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import UserComponent from '../userComponent/userComponent';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmComponent from './confirmComponent';


function Cart() {
    const { carrito, allPrice, sendNewOrder, lastOrder, openConfirmacion, handleAbrirConfirmacion, handleCerrarConfirmacion, deleteElement } = useContext(CartContext);

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
                                                        key={prod.title}
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
                        <h2>El carrito esta vacio</h2>
                    </Container>
            }
        </div>
    )
}

export default Cart;

