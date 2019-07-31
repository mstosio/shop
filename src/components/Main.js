/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Products from './Products/Products';

function Main() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    Axios.get('http://localhost:8000/products').then(reponse =>
      setProducts(reponse.data)
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <Products products={products} />;
}

export default Main;
