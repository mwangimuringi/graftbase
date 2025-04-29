import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const { name, cardNumber, expiry, cvv } = formData;
    if (!name || !cardNumber || !expiry || !cvv) {
      alert('Please fill in all fields');
      return;
    }
  
    console.log('Processing payment...', formData);
  };  

  return (
    <form  onSubmit={handleSubmit}>
      <h2>Payment Details</h2>
      <input type="text" name="name" placeholder="Name on Card" />
      <input type="text" name="cardNumber" placeholder="Card Number" />
      <input type="text" name="expiry" placeholder="MM/YY" />
      <input type="text" name="cvv" placeholder="CVV" />
      <button type="submit">Pay Now</button>
    </form>
  );
};
