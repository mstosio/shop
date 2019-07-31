import React, { Component } from 'react';

const Basket = ({ basketItems }) => {
  let basket;

  if (basketItems.length === 0) {
    basket = 'Basket is Empty';
  } else {
    basket = 'smack';
  }

  return basket;
};

export default Basket;
