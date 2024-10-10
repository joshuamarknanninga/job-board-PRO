import React, { useState } from 'react';
import API from '../utils/API';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await API.signup(formState);
      // Handle successful signup
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" value={formState.username} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formState.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formState.password} onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
