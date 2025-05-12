import React, { useState } from 'react';
import axios from 'axios';

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    loanAmount: '',
    income: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/applications', formData);
      setMessage('Application submitted successfully!');
      setFormData({ name: '', loanAmount: '', income: '' });
    } catch (error) {
      console.error(error);
      setMessage('Error submitting application.');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Apply for a Loan</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange}
                 className="border p-2 w-full mt-1" required />
        </label>

        <label className="block mb-2">
          Loan Amount:
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange}
                 className="border p-2 w-full mt-1" required />
        </label>

        <label className="block mb-4">
          Monthly Income:
          <input type="number" name="income" value={formData.income} onChange={handleChange}
                 className="border p-2 w-full mt-1" required />
        </label>

        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Submit</button>
      </form>

      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
};

export default LoanApplicationForm;
