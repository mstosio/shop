import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import BasketItem from './BasketItem/BasketItem';

const Basket = ({
  basketItems,
  deleteItemFromBasket,
  totalCost,
  setTotalCost,
}) => {
  let basket = '';
  let cost;

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

    setTotalCost(cost);
  } else {
    basket = <Alert variant="success">Basket is Empty</Alert>;
  }

  return (
    <>
      <div>Total cost: {totalCost} zł</div>
      <div>{basket}</div>
    </>
  );
};

export default Basket;

Basket.propTypes = {
  deleteItemFromBasket: PropTypes.func,
  basketItems: PropTypes.array,
  totalCost: PropTypes.number,
  setTotalCost: PropTypes.func,
};
