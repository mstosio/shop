import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Product = ({ id, title, price, desc }) => (
  <div>
    <h2>{title}</h2>
    <p>{price}</p>
    <p>{desc}</p>
    <Button variant="dark" size="xxl">
      Add to card
    </Button>
  </div>
);

export default Product;

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
};
