/* eslint no-shadow: 1 */

import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { validate } from '@babel/types';

const Payment = ({ basketItems, setPaymentMode, totalCost }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      surname: '',
      city: '',
      strett: '',
      postalcode: '',
      nameError: '',
      surnameError: '',
    }
  );

  const handleChange = evt => {
    const { id, value } = evt.target;
    setUserInput({ [id]: value });
  };

  const validateForm = () => {
    // const isValid = false;
    const { name, surname, city, street, postalcode } = userInput;
    let { nameError, surnameError } = '';

    if (name === '') {
      nameError = 'Your name is empty';
    } else {
      nameError = '';
    }

    if (surname === '') {
      surnameError = 'Your name is empty';
    } else {
      surnameError = '';
    }

    setUserInput({ nameError, surnameError });

    if (nameError || surnameError) {
      return false;
    }

    console.log('yt');
  };

  const confirmPayment = (e, items) => {
    e.preventDefault();
    const { name, surname, city, street, postalcode } = userInput;
    validateForm();

    // if (!validateForm()) {
    //   alert(`${name} ${surname}. Your total cost of items is ${totalCost} zl`);
    // } else {
    //   alert(`Please, fill all of info`);
    // }
  };

  return (
    <>
      <div>
        <form action="" onSubmit={e => confirmPayment(e, basketItems)}>
          <label htmlFor="name">
            {userInput.nameError}Name:
            <input
              type="text"
              id="name"
              value={userInput.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="surname">
            {userInput.surnameError}Surname:
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
              placeholder="ex. Street 21"
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
              placeholder="ex. 08-103"
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
