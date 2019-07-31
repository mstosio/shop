import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product/Product';

const Products = ({ products }) => (
  <div>
    {products.map(product => (
      <Product
        key={product.id}
        title={product.title}
        price={product.price}
        desc={product.desc}
      />
    ))}
  </div>
);

export default Products;

Products.propTypes = {
  products: PropTypes.array,
};
