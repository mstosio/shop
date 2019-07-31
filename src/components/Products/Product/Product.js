import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { formatPrice } from '../../../utils/Helpers';

const Product = ({ id, title, price, catalognumber, addItemToCard }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`./assets/img/${catalognumber}.jpg`} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{formatPrice(price)}</Card.Text>
      <Button variant="primary" onClick={addItemToCard}>
        Add to card
      </Button>
    </Card.Body>
  </Card>
);

export default Product;

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  catalognumber: PropTypes.string,
  addItemToCard: PropTypes.func,
};
