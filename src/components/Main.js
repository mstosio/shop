/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from './Nav/Nav';
import Products from './Products/Products';
import Basket from './Basket/Basket';

function Main() {
  const [products, setProducts] = useState([]);
  const [basketItems, addItem] = useState([]);

  const getProducts = () => {
    Axios.get('http://localhost:8000/products').then(response =>
      setProducts(response.data)
    );
  };

  const addItemToBasket = (e, item, quantity) => {
    console.log(products);
    console.log(item);
    console.log(quantity);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <Row>
          <Col md={8}>
            <Products products={products} addItemToBasket={addItemToBasket} />
          </Col>
          <Col md={4}>
            <Basket basketItems={basketItems} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
