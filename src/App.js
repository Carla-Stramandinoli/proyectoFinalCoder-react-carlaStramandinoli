import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../src/components/navBar/navBar'
import Home from './containers/home/home'
import DetailsContainer from './containers/detailsContainer/detailsContainer.jsx'
import { CartProvider } from './context/cartContext'
import Cart from './containers/cartContainer/cart'
import AuthProvider from './auth/authProvider'
import UserFormComponent from './components/userComponent/userFormComponent'

function App() {

  return (
    <div>
      <CartProvider>
        <AuthProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path={'/'} element={<UserFormComponent />} />
              <Route path={'/items/:itemId'} element={<Home />} />
              <Route path={'/details/:id'} element={<DetailsContainer />} />
              <Route path={'/cart'} element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </div >
  )
}

export default App;
