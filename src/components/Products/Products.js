import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from './Product/Product';

const Products = ({ products }) => (
  <Container>
    <Row>
      <Col md={12}>
        <Row>
          {products.map(product => (
            <Col md={4} key={product.id}>
              <Product
                title={product.title}
                price={product.price}
                catalognumber={product.catalognumber}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Products;

Products.propTypes = {
  products: PropTypes.array,
};
