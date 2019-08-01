/* eslint no-shadow: 1 */

import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Payment = ({ basketItems, setPaymentMode, totalCost }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      surname: '',
      adress: '',
    }
  );

  const handleChange = evt => {
    const { id, value } = evt.target;
    setUserInput({ [id]: value });
  };

  const validateForm = () => {
    const { name, surname, city, street } = userInput;
  };

  const confirmPayment = (e, items) => {
    e.preventDefault();
    const { name, surname, city, street } = userInput;
    if (!validateForm()) {
      alert(`${name} ${surname}. Your total cost of items is ${totalCost} zl`);
    } else {
      alert(`Please, fill all of info`);
    }
  };

  return (
    <>
      <div>
        <form action="" onSubmit={e => confirmPayment(e, basketItems)}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={userInput.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="surname">
            Surname:
            <input
              type="text"
              id="surname"
              value={userInput.surname}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="city">
            City
            <input
              type="text"
              id="city"
              value={userInput.city}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="street">
            Street
            <input
              type="text"
              id="street"
              value={userInput.street}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="postalcode">
            Postal Code:
            <input
              type="text"
              id="postalcode"
              name="postalcode"
              value={userInput.postalcode}
              onChange={handleChange}
            />
          </label>
          <Button type="submit">Submit order</Button>
        </form>
        <Button onClick={() => setPaymentMode(false)}>Go back to Basket</Button>
      </div>
    </>
  );
};

export default Payment;

Payment.propTypes = {
  basketItems: PropTypes.array,
  setPaymentMode: PropTypes.func,
  totalCost: PropTypes.number,
};
