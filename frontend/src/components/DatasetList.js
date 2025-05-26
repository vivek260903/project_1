import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function DatasetList() {
  const [datasets, setDatasets] = useState([]);
  useEffect(() => {
    axios.get('/api/datasets').then(res => setDatasets(res.data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {datasets.map(ds => (
        <Link key={ds._id} to={`/datasets/${ds._id}`} className="border p-4 rounded">
          <h3 className="font-bold">{ds.title}</h3>
          <p>{ds.description}</p>
        </Link>
      ))}
    </div>
  );
}