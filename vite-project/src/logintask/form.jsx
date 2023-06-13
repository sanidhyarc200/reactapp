import React, { useState } from 'react';
import './form.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const validationErrors = {};
    if (!email) {
      validationErrors.email = 'Email is required.';
    }
    if (!password) {
      validationErrors.password = 'Password is required.';
    }

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
