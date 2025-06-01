import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/auth/signup', { email, hashed_password: password });
      alert('Signup successful');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Signup</button>
      </form>
    </div>
  );
}

export default Signup;