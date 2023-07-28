import { Button, Modal, styled } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import ConfirmComponent from '../cartComponent/confirmComponent';

const validateEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);


function UserComponent({ carrito, sendNewOrder }) {
    const { emptyCart, openConfirmacion, handleAbrirConfirmacion, handleCerrarConfirmacion } = useContext(CartContext);

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

    const handleClear = () => {
        emptyCart();
    }


    return (
        <div>
            <CustomButton onClick={handleOpen}>Finalizar compra</CustomButton>
            <CustomButtonClear onClick={handleAbrirConfirmacion}>Vaciar carrito
                <ConfirmComponent open={openConfirmacion}
                    onClose={handleCerrarConfirmacion}
                    onConfirm={handleClear} />
            </CustomButtonClear>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <input type="text" placeholder="Nombre" value={name} onChange={(event) => setName(event.target.value)} />
                    <input type="text" placeholder="Apellido" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input type="number" placeholder="Teléfono" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    <div>
                        <Button onClick={handleSubmit} disabled={!validateForm()}>Finalizar compra</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}


export default UserComponent;

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
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
    left: '80%',
    '&:hover': {
        backgroundColor: '#6E3D5C',
    },
});

const CustomButtonClear = styled(Button)({
    backgroundColor: '#9E768F',
    color: 'white',
    padding: '10px 20px',
    margin: '10px',
    border: '2px solid black',
    borderRadius: '4px',
    fontSize: '16px',
    right: '20%',
    '&:hover': {
        backgroundColor: '#6E3D5C',
    },
});