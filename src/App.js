import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../src/components/navBar/navBar'
import Home from './containers/home/home'
import DetailsContainer from './containers/detailsContainer/detailsContainer.jsx'
import { CartContext } from './context/cartContext'

function App() {
  const [carrito, setCarrito] = React.useState([]);
  


  return (
    <div>
      <CartContext.Provider value={{carrito , setCarrito}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/items/:itemId'} element={<Home />} />
          <Route path={'/details/:id'} element={<DetailsContainer />} />
          <Route path={'/cart'} element={<p>Aca va la vista cart</p>} />
        </Routes>
      </BrowserRouter>
      </CartContext.Provider> 
    </div>
  )
}

export default App;
