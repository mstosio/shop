import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasketItem from './BasketItem/BasketItem';

const Basket = ({ basketItems, deleteItemFromBasket }) => {
  let basket = '';

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
  }

  if (basketItems.length === 0) {
    basket = 'Basket is Empty';
  }

  return basket;
};

export default Basket;

Basket.propTypes = {
  deleteItemFromBasket: PropTypes.func,
};
