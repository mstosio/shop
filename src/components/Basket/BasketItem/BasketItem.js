import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyledBasketItem } from './StyledBasketItem';

const BasketItem = ({ title, quantity, deleteItemFromBasket, item }) => (
  <>
    <StyledBasketItem classsName="basketItem">
      <Row>
        <Col md={8}>
          {' '}
          <h5>{title}</h5>
        </Col>
        <Col md={4}>
          {' '}
          <span>Quantity:</span>
          <span>{quantity}</span>
        </Col>
        <Col>
          {' '}
          <Button
            variant="danger"
            size="sm"
            onClick={e => deleteItemFromBasket(item)}
          >
            Delete Item
          </Button>
        </Col>
      </Row>
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
