import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Swal from 'sweetalert2';
import { Container, Stack } from '@mui/system';
import { Button, Input } from '@mui/base';
import { FormLabel } from '@mui/material';
import styled from '@emotion/styled';

function UserFormComponent() {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleUserChange = (event) => setUser(event.target.value);

    const handleLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!user || !password) {
            return;
        }
        signInWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((err) => {
                console.log(err)
                Swal.fire(
                    'usuario o contraseña incorrectos!'
                )
            })
    }

    return (
        <div>
            <h1 style={positionStyle}>Login user</h1>
                <Container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                    <Stack spacing={1}>
                        <FormLabel>Email:</FormLabel>
                        <Input type="text" value={user} onChange={handleUserChange} />
                        <FormLabel>Contraseña:</FormLabel>
                        <Input type="password" value={password} onChange={handlePasswordChange} />
                        <CustomButton onClick={handleLogin} disabled={!user || !password}>Login</CustomButton>
                    </Stack>
                </Container>
        </div>
    )
}

export default UserFormComponent;

const CustomButton = styled(Button)({
    backgroundColor: '#9E768F',
    color: 'white',
    padding: '10px 20px',
    margin: '8px',
    border: '2px solid black',
    borderRadius: '4px',
    fontSize: '16px',
    '&:hover': {
        backgroundColor: '#6E3D5C',
    },
});

const positionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#9FA4C4',
    height: '30vh'
}