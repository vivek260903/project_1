import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name:'',email:'', password: '' });
  const nav = useNavigate();
  const submit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/auth/register', form);
    localStorage.setItem('token', res.data.token);
    nav('/');
  };
  return (
    <form onSubmit={submit} className="max-w-md m-auto p-4">
      <h2 className="text-2xl mb-4">Register</h2>
      <input onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="block mb-2 w-full" />
      <input onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="block mb-2 w-full" />
      <input type="password" onChange={e=>setForm({...form,password:e.target.value})} placeholder="Password" className="block mb-4 w-full" />
      <button type="submit" className="bg-green-500 p-2 rounded text-white">Register</button>
    </form>
  );
}