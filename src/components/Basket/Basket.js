import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import BasketItem from './BasketItem/BasketItem';

const Basket = ({
  basketItems,
  deleteItemFromBasket,
  totalCost,
  setTotalCost,
  totalQuantity,
  setTotalQuantity,
}) => {
  let basket = '';
  let cost;
  let basketquantity;

  if (basketItems.length >= 1) {
    basket = basketItems.map(item => (
      <BasketItem
        key={item.id}
        item={item}
        title={item.title}
        quantity={item.quantity}
        deleteItemFromBasket={deleteItemFromBasket}
      />
    ));

    cost = basketItems.reduce(
      (price, current) => price + current.price * current.quantity,
      0
    );

    basketquantity = basketItems.reduce(
      (quantity, current) => quantity + current.quantity,
      0
    );

    setTotalQuantity(basketquantity);
    setTotalCost(cost);
  } else {
    setTotalQuantity(0);
    setTotalCost(0);
    basket = <Alert variant="success">Basket is Empty</Alert>;
  }

  return (
    <>
      <Row>
        <Col md={6}>
          <div>Total cost: {totalCost} zł</div>
        </Col>
        <Col md={6}>
          <div>Items in the basket: {totalQuantity}</div>
        </Col>
        <Col>
          <div>{basket}</div>
        </Col>
      </Row>
    </>
  );
};

export default Basket;

Basket.propTypes = {
  deleteItemFromBasket: PropTypes.func,
  basketItems: PropTypes.array,
  totalCost: PropTypes.number,
  setTotalCost: PropTypes.func,
  setTotalQuantity: PropTypes.func,
  totalQuantity: PropTypes.number,
};
