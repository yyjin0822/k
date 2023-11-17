import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Home.js';
import Cart from './Components/Cart.js';

import Coffee from './Components/Coffee.js';
import Smoothie from './Components/Smoothie.js';
import NonCoffee from './Components/NonCoffee.js';
import TEAtavalon from './Components/TEAtavalon.js';
import SIGNATURE from './Components/SIGNATURE.js';

import './App.css';

import Admin from './Components/Admin.js';
import OrderList from './Components/OrderList.js';

export default function App() {
  const [inCart, setInCart] = useState([]);
  const [allMenus, setAllMenus] = useState([]);

  useEffect(() => {
    const apiURL = 'http://localhost:8080/get_menus.php';

    axios
      .get(apiURL)
      .then((response) => {
        setAllMenus(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(allMenus); // < 임시

  const addToCart = (drink_product) => {
    setInCart([...inCart, drink_product]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Link className="title" to="/">
          BLOOMSBURRY
        </Link>
      </div>
      <nav className="navBar">
        <ul>
          <li className="homeLink">
            <Link to="/">HOME</Link>
          </li>
          <li className="coffeeLink">
            <Link to="/Coffee">COFFEE</Link>
          </li>
          <li className="SmoothieLink">
            <Link to="/Smoothie">SMOOTHIE</Link>
          </li>
          <li className="NONcoffeeLink">
            <Link to="/NonCoffee">NON-COFFEE</Link>
          </li>
          <li className="TEA-tavalon">
            <Link to="/TEA-tavalon">TEA-tavalon</Link>
          </li>
          <li className="SIGNATURE">
            <Link to="/SIGNATURE">SIGNATURE</Link>
          </li>
          <li className="cartLink">
            <Link to="/cart">
              <i className="fa fa-shopping-cart cartIcon"> CART</i>
            </Link>
          </li>
          <li className="AdminLink">
            <Link to="/Admin">사장님페이지</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/cart" element={<Cart inCart={inCart} />} />
        <Route index element={<Home />} />

        {/*kind에 해당하는 메뉴만 필터링 */}
        <Route path="/Coffee" element={<Coffee menus={allMenus.filter((menu) => menu.kind === 'coffee')} addToCart={addToCart} />} />
        <Route path="/Smoothie" element={<Smoothie menus={allMenus.filter((menu) => menu.kind === 'smoothie')} addToCart={addToCart} />} />
        <Route path="/NonCoffee" element={<NonCoffee menus={allMenus.filter((menu) => menu.kind === 'NON-coffee')} addToCart={addToCart} />} />
        <Route path="/TEA-tavalon" element={<TEAtavalon menus={allMenus.filter((menu) => menu.kind === 'TEA-tavalon')} addToCart={addToCart} />} />
        <Route path="/SIGNATURE" element={<SIGNATURE menus={allMenus.filter((menu) => menu.kind === 'SIGNATURE')} addToCart={addToCart} />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Orderlist" element={<OrderList />} />
      </Routes>
      <footer className="footer">
        <div></div>
      </footer>
    </BrowserRouter>
  );
}
