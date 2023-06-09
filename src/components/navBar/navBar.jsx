import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import CartWidget from "./cartWidget";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <AppBar position="static" sx={{backgroundColor: '#456990'}}>
            <Container maxWidth=" xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontSize: 40,
                            letterSpacing: '.2rem',
                            color: 'black',
                            textDecoration: 'none',
                        }} >
                        Ikki-Naguis
                    </Typography>
 
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to={'/cart'}>
                        <CartWidget productos={5} />
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 0.1, color: 'black', fontFamily: 'monospace', fontSize: 25 }}> Ingresar como:
                    </Box>
                    <Box>
                        <IconButton onClick={handleOpen} sx={{ color: 'white' }}>
                            Usuario
                        </IconButton>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description" >
                            <Box>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    ACA VA UN FORMULARIO PARA INGRESAR/LOGUEARSE COMO USUARIO
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    FORMULARIO.
                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;