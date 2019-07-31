/* eslint-disable react/no-unused-state */
/* eslint-disable no-cond-assign */

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { statement } from '@babel/template';
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
  }, [getProducts]);

  return <Products products={products} />;
}

export default Main;
