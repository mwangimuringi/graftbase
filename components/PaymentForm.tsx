import React, { useState } from "react";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, cardNumber, expiry, cvv } = formData;

    if (!name || !cardNumber || !expiry || !cvv) {
      alert("Please fill in all fields");
      return;
    }

    if (cardNumber.length !== 16) {
      alert("Card number must be 16 digits");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      alert("Payment successful!");
      setFormData({ name: "", cardNumber: "", expiry: "", cvv: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center">Payment Form</h2>

      <div>
        <label className="font-semibold">Name on Card</label>
        <input
          className="border p-2 rounded w-full"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="font-semibold">Card Number</label>
        <input
          className="border p-2 rounded w-full"
          name="cardNumber"
          type="text"
          placeholder="1234567812345678"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <small className="text-sm text-gray-500">16 digits, no spaces</small>
      </div>

      <div>
        <label className="font-semibold">Expiry (MM/YY)</label>
        <input
          className="border p-2 rounded w-full"
          name="expiry"
          type="text"
          placeholder="MM/YY"
          value={formData.expiry}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="font-semibold">CVV</label>
        <input
          className="border p-2 rounded w-full"
          name="cvv"
          type="password"
          placeholder="123"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className={`bg-green-600 text-white w-full py-2 rounded ${
          isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:bg-green-700"
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default PaymentForm;
