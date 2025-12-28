// src/components/HomePage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_KEY = "85232622";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Fetch movies from OMDb
  async function fetchMovies(search = "Avengers") {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${search}&type=movie&apikey=${API_KEY}`
      );
      setMovies(res.data.Search || []);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") fetchMovies(query.trim());
  };

  const handleWatchNow = (imdbID) => {
    navigate(`/movie/${imdbID}`);
  };

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      if (prev.find((m) => m.imdbID === movie.imdbID)) {
        return prev.filter((m) => m.imdbID !== movie.imdbID);
      } else {
        return [...prev, movie];
      }
    });
  };

  const isFavorite = (imdbID) => favorites.some((m) => m.imdbID === imdbID);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between p-4 bg-black bg-opacity-80 relative">
       {/* Hamburger */}
<div className="relative z-50">
  <div
    className="text-2xl cursor-pointer"
    onClick={() => setShowDropdown(!showDropdown)}
  >
    ☰
  </div>

  {showDropdown && (
    <>
      {/* Blur Overlay */}
      <div
        className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
        onClick={() => setShowDropdown(false)}
      />

      {/* Dropdown */}
      <div className="absolute top-10 left-0 bg-gray-800 text-white rounded shadow-lg py-2 w-40 z-50">
        {[
          "Action",
          "Comedy",
          "Drama",
          "Sci-Fi",
          "Romantic",
          "Animation",
          "Musical",
          "Kenyan Shows",
        ].map((cat) => (
          <div
            key={cat}
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => {
              fetchMovies(cat);
              setShowDropdown(false);
            }}
          >
            {cat}
          </div>
        ))}
      </div>
    </>
  )}
</div>


        {/* Search bar */}
        <form className="flex-1 mx-4 min-w-[200px]" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="w-full px-4 py-2 rounded-lg text-black focus:outline-none"
          />
        </form>

        {/* Navigation links */}
        <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
          <button
            onClick={() => navigate("/favorites")}
            className="hover:underline text-black bg-white px-3 py-1 rounded"
          >
            Favorites
          </button>
          <button
            onClick={() => navigate("/coming-soon")}
            className="hover:underline text-black bg-white px-3 py-1 rounded"
          >
            Coming Soon
          </button>
        </div>
      </nav>

      {/* Movie grid */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-200"
            >
              {/* Favorite Heart */}
              <div
                className="absolute top-2 right-2 text-2xl cursor-pointer"
                onClick={() => toggleFavorite(movie)}
              >
                {isFavorite(movie.imdbID) ? "❤️" : "🤍"}
              </div>

              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                alt={movie.Title}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-64 2xl:h-80 object-cover"
              />

              {/* Movie info bar */}
              <div className="absolute bottom-10 left-0 w-full flex justify-between items-center px-2 py-1 bg-black bg-opacity-70 text-sm">
                <span>⭐ {movie.imdbRating || "N/A"}</span>
                <span>{movie.Runtime || "N/A"}</span>
              </div>

              {/* Watch Now button */}
              <button
                className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 text-sm rounded hover:bg-gray-200"
                onClick={() => handleWatchNow(movie.imdbID)}
              >
              WATCH NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-80 text-center py-4 mt-auto">
        &copy; {new Date().getFullYear()} Cineflix. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;

