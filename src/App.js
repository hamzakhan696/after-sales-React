import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Warranty from './pages/Warranty';
import Products from './pages/Products'
import Services from './pages/Services';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
