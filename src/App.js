import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/navBar/navBar'
import Home from './pages/home/home';
import DetailsComponents from './components/detailsComponents/detailsComponents';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/items/:itemId'} element={<Home />} />
        <Route path={'/details/:itemId'} element={<DetailsComponents /> } /> 
        <Route path={'/cart'} element={<p>Aca va la vista cart</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
