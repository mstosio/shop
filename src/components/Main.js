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
  const [basketItems, setItem] = useState([]);

  const getProducts = () => {
    Axios.get('http://localhost:8000/products').then(response =>
      setProducts(response.data)
    );
  };

  const addItemToBasket = (e, item, quantity) => {
    const basketProducts = [...basketItems];

    let addToBasket = true;

    if (quantity < 1) {
      addToBasket = false;
      alert('Eyy, you should pick at least 1 product');
    }

    if (quantity > 50) {
      addToBasket = false;
      alert("Whoops, you can't order more then 50 prodcuts");
    }

    basketProducts.forEach(basketProduct => {
      if (item.id === basketProduct.id) {
        addToBasket = false;
        item.quantity += Number(quantity);
      }
    });

    if (addToBasket) {
      item.quantity = Number(quantity);
      basketProducts.push(item);
    }

    setItem(basketProducts);
  };

  const deleteItemFromBasket = item => {
    let basketProducts = [...basketItems];

    basketProducts = basketProducts.filter(product => item.id !== product.id);
    console.log(basketProducts);

    setItem(basketProducts);
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
            <Basket
              basketItems={basketItems}
              deleteItemFromBasket={deleteItemFromBasket}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
