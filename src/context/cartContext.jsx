import React from 'react'
import { createContext } from "react"


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = React.useState([]);
  
    const AddToCart = (data, counter) => {
      const itemAgregado = {...data, counter};
      const newCart = [...carrito];
      const cartTrue = newCart.find((prod) => prod.id === itemAgregado.id);
      if (cartTrue){
        cartTrue.counter += counter;
      } else {   
        newCart.push(itemAgregado);
      }
      setCarrito(newCart);
    }
  
    const cartQuantity = () =>{
      let priceCart = carrito.reduce((acc, prod) =>  acc + prod.counter, 0);
      priceCart.toFixed(2);
      return priceCart;
    }
    const allPrice = () => {
      let allPriceCart = carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0);
      allPriceCart.toFixed(2);
      return allPriceCart;
    }
  
    const emptyCart = () =>{
          setCarrito([]);
    }

    return( 
    <CartContext.Provider value={{ carrito , AddToCart, cartQuantity, allPrice, emptyCart }}>
        {children}
    </CartContext.Provider>
    )
}