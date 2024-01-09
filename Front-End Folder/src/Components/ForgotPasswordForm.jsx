import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Make a request to the forgot password API endpoint
      const response = await axios.post('http://localhost:3000/auth/forgot-password', { email });

      // Display a success message to the user
      setMessage(response.data.message);
    } catch (error) {
      // Handle error and display it to the user
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleForgotPassword}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
