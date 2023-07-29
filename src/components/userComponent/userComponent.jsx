import { Button, Container, FormLabel, Input, Modal, Stack, styled } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ConfirmComponent from '../cartComponent/confirmComponent';

const validateEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);


function UserComponent({ carrito, sendNewOrder }) {
    const { emptyCart } = useContext(CartContext);

    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        if (!validateForm() || !sendNewOrder || !carrito.length) {
            return
        }

        const order = {
            buyer: {
                name,
                lastName,
                email,
                phone
            },
            products: carrito,
            date: new Date(),
            total: carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
        }
        sendNewOrder(order);
    }

    const validateForm = () => {
        return (name.length >= 3) && (lastName.length >= 2) && validateEmail(email) && ((phone.length > 9) && (phone.length < 11));
    }

    const [openConfirm, setOpenConfirm] = useState(false);

    const handleOpenConfirm = () => {
        setOpenConfirm(true);
    }

    // resolver porq no cierra cuando apreto cancelar
    const handleCloseConfirm = () => {
        setOpenConfirm(false);

    }
    const handleClear = () => {
        emptyCart();
    }


    return (
        <div>
            <CustomButton sx={{ left: "80%" }} onClick={handleOpen}>Finalizar compra</CustomButton>
            <Link to={'/'}>
            <CustomButton sx={{ right: "20%" }}>Volver</CustomButton>
            </Link>
            <CustomButton sx={{ left: "5%" }} onClick={handleOpenConfirm}>Vaciar carrito
                <ConfirmComponent
                    open={openConfirm}
                    onClose={handleCloseConfirm}
                    onConfirm={handleClear}
                />
            </CustomButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <Container>
                        <Stack spacing={1}>
                            <FormLabel>Nombre:</FormLabel>
                            <Input type="text" placeholder="Nombre" value={name} onChange={(event) => setName(event.target.value)} />
                            <FormLabel>Apellido:</FormLabel>
                            <Input type="text" placeholder="Apellido" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                            <FormLabel>Email:</FormLabel>
                            <Input type="text" placeholder="pepe@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                            <FormLabel>Telefono:</FormLabel>
                            <Input required type="number" placeholder="Teléfono, debe contener 10 caracteres" value={phone} onChange={(event) => setPhone(event.target.value)} />
                        </Stack>
                        <div>
                            <CustomButtonSubmit onClick={handleSubmit} disabled={!validateForm()}>Finalizar compra</CustomButtonSubmit>
                        </div>
                    </Container>

                </Box>
            </Modal>
        </div >
    )
}


export default UserComponent;

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#E4D4DE',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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

const CustomButtonSubmit = styled(Button)({
    backgroundColor: '#9E768F',
    color: 'white',
    padding: '10px 20px',
    margin: '10px',
    border: '2px solid black',
    borderRadius: '4px',
    fontSize: '12px',
    left: '38%',
    '&:hover': {
        backgroundColor: '#6E3D5C',
    },
});