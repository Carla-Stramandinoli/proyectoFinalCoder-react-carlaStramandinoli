import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/navBar/navBar'
import Home from './containers/home/home';
import DetailsComponents from './containers/detailsContainer/detailsContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/items/:itemId'} element={<Home />} />
        <Route path={'/details/:id'} element={<DetailsComponents /> } /> 
        <Route path={'/cart'} element={<p>Aca va la vista cart</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
