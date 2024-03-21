import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Warranty from "./pages/Warranty";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import TCare from "./pages/TCare";
import NewsEvents from "./pages/NewsEvents";
import LatestNewsEvents from "./pages/LatestNewsEvents";
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/t-care" element={<TCare />} />
          <Route path="/news-and-events" element={<NewsEvents />} />
          <Route
            path="/latest-news-and-events"
            element={<LatestNewsEvents />}
          />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
    
  );
}

export default App;
