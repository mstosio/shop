import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import QuantityButton from '../../Buttons/QuantityButton';
import { formatPrice } from '../../../utils/Helpers';

const Product = ({
  id,
  title,
  price,
  catalognumber,
  addItemToBasket,
  product,
}) => {
  const [quantity, changeQuantity] = useState(0);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`./assets/img/${catalognumber}.jpg`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{formatPrice(price)}</Card.Text>
        <Button
          variant="primary"
          onClick={e => addItemToBasket(e, product, quantity)}
        >
          Add to card
        </Button>
        <QuantityButton changeQuantity={changeQuantity} />
      </Card.Body>
    </Card>
  );
};

export default Product;

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  catalognumber: PropTypes.string,
  addItemToBasket: PropTypes.func,
  product: PropTypes.object,
};
