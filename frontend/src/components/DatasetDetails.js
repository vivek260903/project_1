import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DatasetDetail() {
  const { id } = useParams();
  const [ds, setDs] = useState(null);
  useEffect(() => {
    axios.get(`/api/datasets/${id}`).then(res => setDs(res.data));
  }, [id]);
  if (!ds) return <p>Loading...</p>;
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{ds.title}</h2>
      <p className="mt-2">{ds.description}</p>
      <a href={ds.url} className="text-blue-500 mt-4 block">Download</a>
    </div>
  );
}