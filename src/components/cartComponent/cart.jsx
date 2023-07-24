import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import UserComponent from '../userComponent/userComponent';

function Cart() {
    const { carrito, allPrice, emptyCart, sendNewOrder, lastOrder } = useContext(CartContext);

    const handleClear = () => {
        emptyCart();
    }

    return (
        <div>
            <h1>Carrito</h1>
            {
                carrito.map((prod, index) => (
                    <div key={index.id}>
                        <h3>{prod.title}</h3>
                        <p>Precio unit: ${prod.price}</p>
                        <p>Cantidad: {prod.counter}</p>
                        <p>Precio total: ${prod.price * prod.counter}</p>
                        <br />
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio total: ${allPrice()}</h2>
                    <button onClick={handleClear}>Vaciar</button>
                </> :
                <h2>El carrito esta vacio</h2>
            }
            <UserComponent carrito={carrito} sendNewOrder={sendNewOrder} lastOrder={lastOrder}/>
        </div>
    )
}

export default Cart;