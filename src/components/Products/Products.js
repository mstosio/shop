import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from './Product/Product';

const Products = ({ products }) => (
  <Container>
    <Row>
      <Col md={8}>
        {products.map(product => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            desc={product.desc}
          />
        ))}
      </Col>
    </Row>
  </Container>
);

export default Products;

Products.propTypes = {
  products: PropTypes.array,
};
