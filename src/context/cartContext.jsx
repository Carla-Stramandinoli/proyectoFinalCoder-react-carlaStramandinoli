import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import React from 'react'
import { createContext } from "react"
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = React.useState([]);
  const [orderId, setOrderId] = React.useState('');

  const sendNewOrder = (order) => {
    const db = getFirestore();
    const orders = collection(db, 'orders');

    addDoc(orders, order)
      .then((resp) => {
        setOrderId(resp.id)
        setCarrito([]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Tu compra fue enviada con exito!',
          showConfirmButton: false,
          timer: 1500
        })

        const getDoc = doc(db, "orders", resp.id);
        updateDoc(getDoc, { orderId: resp.id })
      })
  }

  const AddToCart = (data, counter) => {
    const itemAgregado = { ...data, counter };
    const newCart = [...carrito];
    const cartTrue = newCart.find((prod) => prod.id === itemAgregado.id);
    if (counter === 0) {
      return (Swal.fire(
        'Debes agregar al menos 1 elemento!'
      ))
    } else if (cartTrue) {
      cartTrue.counter += counter;
    } else {
      newCart.push(itemAgregado);
    }
    setCarrito(newCart);
  }

  const cartQuantity = () => {
    let priceCart = carrito.reduce((acc, prod) => acc + prod.counter, 0);
    priceCart.toFixed(2);
    return priceCart;
  }
  const allPrice = () => {
    let allPriceCart = carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0);
    return allPriceCart.toFixed(2);;
  }

  const emptyCart = () => {
    setCarrito([]);
  }

 

  return (
    <CartContext.Provider value={{ carrito, setCarrito, AddToCart, cartQuantity, allPrice, emptyCart, sendNewOrder, lastOrder: orderId}}>
      {children}
    </CartContext.Provider>
  )
}