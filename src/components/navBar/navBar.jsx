import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import CartWidget from "../cartComponent/cartWidget"
import { Button } from "@mui/base";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

function ResponsiveAppBar() {


    const handleSignOut = () => {
        signOut(auth);
      }

    return (
        <AppBar position="static" sx={{ backgroundColor: '#9E768F' }}>
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

                    <Box sx={{ flexGrow: 1, justifyContent:'end', display: { xs: 'none', md: 'flex' } }}>
                        <Link to={'/cart'}>
                            <CartWidget productos={5} />
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, justifyContent:'end', display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={handleSignOut}>Salir</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;