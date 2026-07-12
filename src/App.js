
import React from 'react';
import { Home } from './Pages/Home';
import './index.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from './Pages/Shop';
import Register from './Components/Register/Register';
import { Contactpage } from './Pages/Contact';
import Cart from './Pages/Cart';
import { Checkoutpage } from './Pages/Checkoutpage';
import ProductPage from './Components/ShopPage/Productpage';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkoutpage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* <Route path="singleproduct" element={<ItemPage/>} /> */}
          <Route path="*" element={<ErrorPage />} />




          {/* <Route path="/shop" element={<SingleProduct/>} /> */}

        </Routes>
      </Router>

    </div>
  );
}


export default App;

