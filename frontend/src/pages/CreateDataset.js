import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateDataset() {
  const [form, setForm] = useState({ title: '', description: '', url: '' });
  const nav = useNavigate();

  const submit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/datasets', form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Dataset uploaded successfully!');
      nav('/');
    } catch (err) {
      alert('Upload failed. Are you logged in?');
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md m-auto p-4">
      <h2 className="text-2xl mb-4">Upload Dataset</h2>
      <input placeholder="Title" className="block mb-2 w-full" onChange={e => setForm({...form, title: e.target.value})} />
      <input placeholder="Description" className="block mb-2 w-full" onChange={e => setForm({...form, description: e.target.value})} />
      <input placeholder="URL" className="block mb-4 w-full" onChange={e => setForm({...form, url: e.target.value})} />
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Upload</button>
    </form>
  );
}