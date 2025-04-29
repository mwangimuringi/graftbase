// components/forms/FeedbackForm.tsx

import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rating || !formData.comments) {
      alert('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Feedback submitted:', formData);
      alert('Thank you for your feedback!');
      setFormData({ rating: '', comments: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>

      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Rating (1–5):</label>
        <input
          className="border p-2 rounded"
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Comments:</label>
        <textarea
          className="border p-2 rounded"
          name="comments"
          rows={4}
          value={formData.comments}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className={`w-full bg-blue-600 text-white p-2 rounded ${
          isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
      </button>
    </form>
  );
};

export default FeedbackForm;
