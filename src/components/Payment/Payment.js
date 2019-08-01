/* eslint no-shadow: 1 */
import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { checkPostalCode, checkValidStreet } from '../../utils/Helpers';
import { StyledLabel, StyledError } from './StyledPayment';

const Payment = ({
  basketItems,
  setPaymentMode,
  totalCost,
  setItem,
  totalQuantity,
}) => {
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

    return true;
  };

  const confirmPayment = (e, items) => {
    e.preventDefault();
    const { name, surname, city, street, postalcode } = userInput;

    if (validateForm(name, surname, city, street, postalcode)) {
      setItem([]);
      setPaymentMode(false);
      alert(
        `${name}! Congratulations, you sucessfully ordered ${totalQuantity} products. You need to pay ${totalCost} zl.`
      );
    }
  };

  return (
    <>
      <div>
        <form action="" onSubmit={e => confirmPayment(e, basketItems)}>
          <StyledLabel htmlFor="name">
            <StyledError>{userInput.nameError}</StyledError>Name:
            <input
              type="text"
              id="name"
              value={userInput.name}
              onChange={handleChange}
            />
          </StyledLabel>
          <StyledLabel htmlFor="surname">
            <StyledError>{userInput.surnameError}</StyledError>Surname:
            <input
              type="text"
              id="surname"
              value={userInput.surname}
              onChange={handleChange}
            />
          </StyledLabel>
          <StyledLabel htmlFor="city">
            <StyledError>{userInput.cityError}</StyledError> City
            <input
              type="text"
              id="city"
              value={userInput.city}
              onChange={handleChange}
            />
          </StyledLabel>
          <StyledLabel htmlFor="street">
            <StyledError>{userInput.streetError}</StyledError> Street
            <input
              type="text"
              id="street"
              placeholder="ex. Street 21"
              value={userInput.street}
              onChange={handleChange}
            />
          </StyledLabel>
          <StyledLabel htmlFor="postalcode">
            <StyledError>{userInput.postalcodeError}</StyledError> Postal Code:
            <input
              type="text"
              id="postalcode"
              name="postalcode"
              placeholder="ex. 08-103"
              value={userInput.postalcode}
              onChange={handleChange}
            />
          </StyledLabel>
          <Button type="submit" variant="success" className="mt-2">
            Submit order
          </Button>
        </form>
        <Button className="mt-4" onClick={() => setPaymentMode(false)}>
          Go back to Basket
        </Button>
      </div>
    </>
  );
};

export default Payment;

Payment.propTypes = {
  basketItems: PropTypes.array,
  setPaymentMode: PropTypes.func,
  totalCost: PropTypes.number,
  setItem: PropTypes.func,
  totalQuantity: PropTypes.number,
};
