import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from './Product/Product';

const Products = ({ products, addItemToBasket }) => (
  <Row>
    {products.map(product => (
      <Col md={6} key={product.id}>
        <Product
          product={product}
          title={product.title}
          price={product.price}
          catalognumber={product.catalognumber}
          addItemToBasket={addItemToBasket}
        />
      </Col>
    ))}
  </Row>
);
export default Products;

Products.propTypes = {
  products: PropTypes.array,
  addItemToBasket: PropTypes.func,
};
