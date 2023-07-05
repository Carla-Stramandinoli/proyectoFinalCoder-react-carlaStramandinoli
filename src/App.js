import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../src/components/navBar/navBar'
import Home from './containers/home/home'
import DetailsContainer from './containers/detailsContainer/detailsContainer.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/items/:itemId'} element={<Home />} />
        <Route path={'/details/:id'} element={<DetailsContainer /> } /> 
        <Route path={'/cart'} element={<p>Aca va la vista cart</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
