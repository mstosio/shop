import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { StyledBasketItem } from './StyledBasketItem';

const BasketItem = ({ title, quantity, deleteItemFromBasket, item }) => (
  <>
    <StyledBasketItem classsName="basketItem">
      <div>{title}</div>
      <div>{quantity}</div>
      <Button
        variant="danger"
        size="sm"
        onClick={e => deleteItemFromBasket(item)}
      >
        Delete Item
      </Button>
    </StyledBasketItem>
  </>
);

export default BasketItem;

BasketItem.propTypes = {
  title: PropTypes.string,
  quantity: PropTypes.number,
  deleteItemFromBasket: PropTypes.func,
  item: PropTypes.object,
};
