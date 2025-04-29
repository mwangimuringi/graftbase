// components/forms/PaymentForm.tsx

import React from 'react';

const PaymentForm = () => {
  return (
    <form>
      <h2>Payment Details</h2>
      <input type="text" name="name" placeholder="Name on Card" />
      <input type="text" name="cardNumber" placeholder="Card Number" />
      <input type="text" name="expiry" placeholder="MM/YY" />
      <input type="text" name="cvv" placeholder="CVV" />
      <button type="submit">Pay Now</button>
    </form>
  );
};
