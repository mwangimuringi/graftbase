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
    setTimeout(() => {
        alert('Payment successful!');
        setFormData({ name: '', cardNumber: '', expiry: '', cvv: '' });
        setIsSubmitting(false);
      }, 1500);      
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

  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const { name, cardNumber, expiry, cvv } = formData;
  if (!name || !cardNumber || !expiry || !cvv) {
    alert('Please fill in all fields');
    return;
  }

  setIsSubmitting(true);
  setTimeout(() => {
    alert('Payment successful!');
    setIsSubmitting(false);
  }, 1500);
};

  return (
    <form
  onSubmit={handleSubmit}
  className="space-y-4 p-4 bg-white rounded shadow-md w-full max-w-md mx-auto"
>
  <h2 className="text-2xl font-bold text-center">Payment Form</h2>
  <input
    className="border p-2 rounded w-full"
    type="text"
    name="name"
    placeholder="Name on Card"
    value={formData.name}
    onChange={handleChange}
    required
  />
  <input
    className="border p-2 rounded w-full"
    type="text"
    name="cardNumber"
    placeholder="Card Number"
    value={formData.cardNumber}
    onChange={handleChange}
    required
  />
  <input
    className="border p-2 rounded w-full"
    type="text"
    name="expiry"
    placeholder="MM/YY"
    value={formData.expiry}
    onChange={handleChange}
    required
  />
  <input
    className="border p-2 rounded w-full"
    type="text"
    name="cvv"
    placeholder="CVV"
    value={formData.cvv}
    onChange={handleChange}
    required
  />
  <label className="font-semibold">Card Number</label>
<input
  className="border p-2 rounded w-full"
  name="cardNumber"
  type="text"
  placeholder="1234 5678 9012 3456"
  value={formData.cardNumber}
  onChange={handleChange}
/>
<small className="text-sm text-gray-500">16 digits, no spaces</small>

  <button
    type="submit"
    className={`bg-green-600 text-white w-full py-2 rounded ${
      isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-green-700'
    }`}
    disabled={isSubmitting}
  >
    {isSubmitting ? 'Processing...' : 'Pay Now'}
  </button>
</form>
  );
};
