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
import styled from "@emotion/styled";

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
                            color: 'white',
                            textDecoration: 'none',
                        }} >
                        Ikki-Naguis
                    </Typography>

                    <Box sx={{ flexGrow: 1, justifyContent:'end', display: { xs: 'none', md: 'flex' } }}>
                        <Link to={'/cart'}>
                            <CartWidget productos={5} />
                        </Link>
                    </Box>
                    <Box>
                        <CustomButtonOut onClick={handleSignOut}>Salir</CustomButtonOut>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;

const CustomButtonOut = styled(Button)({
    backgroundColor: '#9E768F',
    color: 'white',
    padding: '10px 20px',
    margin: '10px',
    border: '2px solid white',
    borderRadius: '4px',
        '&:hover': {
        backgroundColor: '#9E768F',
    },
});