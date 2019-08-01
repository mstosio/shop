/* eslint no-shadow: 1 */

import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { checkPostalCode, checkValidStreet } from '../../utils/Helpers';

const Payment = ({ basketItems, setPaymentMode, totalCost }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      surname: '',
      city: '',
      street: '',
      postalcode: '',
      nameError: '',
      surnameError: '',
      cityError: '',
      streetError: '',
      postalcodeError: '',
    }
  );

  const handleChange = evt => {
    const { id, value } = evt.target;
    setUserInput({ [id]: value });
  };

  const validateForm = (name, surname, city, street, postalcode) => {
    let {
      nameError,
      surnameError,
      cityError,
      streetError,
      postalcodeError,
    } = '';

    if (name === '') {
      nameError = 'Please, provide name';
    } else {
      nameError = '';
    }

    if (surname === '') {
      surnameError = 'Please, provide surname';
    } else {
      surnameError = '';
    }

    if (street === '' || !checkValidStreet(street)) {
      streetError = 'Please, provide valid Street';
    } else {
      streetError = '';
    }

    if (city === '') {
      cityError = 'Please, provide city';
    } else {
      cityError = '';
    }

    if (postalcode === '' || !checkPostalCode(postalcode)) {
      postalcodeError = 'Please, provide valid Postal Code';
    } else {
      postalcodeError = '';
    }

    setUserInput({
      nameError,
      surnameError,
      cityError,
      streetError,
      postalcodeError,
    });

    if (
      nameError ||
      surnameError ||
      cityError ||
      streetError ||
      postalcodeError
    ) {
      return false;
    }

    console.log('yt');
  };

  const confirmPayment = (e, items) => {
    e.preventDefault();
    const { name, surname, city, street, postalcode } = userInput;
    validateForm(name, surname, city, street, postalcode);

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
            {userInput.cityError} City
            <input
              type="text"
              id="city"
              value={userInput.city}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="street">
            {userInput.streetError} Street
            <input
              type="text"
              id="street"
              placeholder="ex. Street 21"
              value={userInput.street}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="postalcode">
            {userInput.postalcodeError} Postal Code:
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
