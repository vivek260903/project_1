import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-white p-4 shadow">
      <Link to="/" className="text-xl font-bold">KaggleClone</Link>
      <div className="space-x-4 float-right">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/create">Upload</Link>
      </div>
    </nav>
  );
}