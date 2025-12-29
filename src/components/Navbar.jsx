import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/add-movie" className="hover:text-gray-300">Add Movie</Link>
    </nav>
  );
}

export default Navbar;

