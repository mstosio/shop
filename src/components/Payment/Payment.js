import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Payment = ({ basketItems, setPaymentMode }) => (
  <>
    <div>
      <form action="" onSubmit={() => alert('h')}>
        <label htmlFor="name">
          Name:
          <input type="name" id="name" />
        </label>
        <label htmlFor="surname">
          Surname:
          <input type="surname" id="surname" />
        </label>
        <label htmlFor="adress">
          Adress:
          <input type="text" id="adress" />
        </label>
        <Button type="submit">Submit order</Button>
      </form>
      <Button onClick={() => setPaymentMode(false)}>Go back to Basket</Button>
    </div>
  </>
);

export default Payment;

Payment.propTypes = {
  basketItems: PropTypes.array,
  setPaymentMode: PropTypes.func,
};
