import React, { useState } from 'react';
import API from '../utils/API';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await API.login(formState.email, formState.password);
      // Save token and redirect
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={formState.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formState.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
