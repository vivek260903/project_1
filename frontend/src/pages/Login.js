import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const nav = useNavigate();
  const submit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/auth/login', form);
    localStorage.setItem('token', res.data.token);
    nav('/');
  };
  return (
    <form onSubmit={submit} className="max-w-md m-auto p-4">
      <h2 className="text-2xl mb-4">Login</h2>
      <input onChange={e => setForm({...form,email:e.target.value})} placeholder="Email" className="block mb-2 w-full" />
      <input type="password" onChange={e=>setForm({...form,password:e.target.value})} placeholder="Password" className="block mb-4 w-full" />
      <button type="submit" className="bg-blue-500 p-2 rounded text-white">Login</button>
    </form>
  );
}