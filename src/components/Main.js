/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Products from './Products/Products';
import Nav from './Nav/Nav';

function Main() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    Axios.get('http://localhost:8000/products').then(reponse =>
      setProducts(reponse.data)
    );
  };

  const addItemToCard = (e, product) => {
    console.log('reaellly');
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Nav />
      <Products products={products} addItemToCard={addItemToCard} />
    </>
  );
}

export default Main;
