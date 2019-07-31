import React from 'react';
import PropTypes from 'prop-types';

const QuantityButton = ({ quantity, changeQuantity }) => (
  <input
    type="number"
    min="0"
    max="50"
    value={quantity}
    onChange={e => changeQuantity(e.target.value)}
  />
);

export default QuantityButton;

QuantityButton.propTypes = {
  changeQuantity: PropTypes.func,
  quantity: PropTypes.string,
};
