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

  // Theme + Sorting + Filtering
  const [theme, setTheme] = useState("dark");
  const [sortBy, setSortBy] = useState("default");
  const [yearFilter, setYearFilter] = useState("");

  const navigate = useNavigate();

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
    if (query.trim()) fetchMovies(query.trim());
  };

  const toggleFavorite = (movie) => {
    setFavorites((prev) =>
      prev.find((m) => m.imdbID === movie.imdbID)
        ? prev.filter((m) => m.imdbID !== movie.imdbID)
        : [...prev, movie]
    );
  };

  const isFavorite = (id) => favorites.some((m) => m.imdbID === id);

  // Sorting & Filtering
  const processedMovies = [...movies]
    .filter((m) => (yearFilter ? m.Year === yearFilter : true))
    .sort((a, b) => {
      if (sortBy === "year") return b.Year - a.Year;
      if (sortBy === "title") return a.Title.localeCompare(b.Title);
      return 0;
    });

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* NAVBAR */}
      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-black/80">
        {/* Left Section */}
        <div className="flex items-center justify-between">
          <div
            className="text-2xl cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            ☰
          </div>
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <>
            <div
              className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
              onClick={() => setShowDropdown(false)}
            />
            <div className="absolute top-16 left-4 bg-gray-800 rounded shadow-lg py-2 w-40 z-50">
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

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="w-full sm:flex-1 sm:mx-4"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="w-full px-4 py-2 rounded text-black"
          />
        </form>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
          <button
            onClick={() => navigate("/favorites")}
            className="bg-white text-black px-3 py-1 rounded"
          >
            Favorites
          </button>

          <button
            onClick={() => navigate("/coming-soon")}
            className="bg-white text-black px-3 py-1 rounded"
          >
            Coming Soon
          </button>

          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="bg-white text-black px-3 py-1 rounded"
          >
            {theme === "dark" ? "☀" : "🌙"}
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-2 py-1 rounded text-black"
          >
            <option value="default">Sort</option>
            <option value="year">Year</option>
            <option value="title">Title</option>
          </select>

          <input
            type="number"
            placeholder="Year"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="px-2 py-1 rounded text-black w-24"
          />
        </div>
      </nav>

      {/* MOVIE GRID */}
      <main className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full">
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6
        ">
          {processedMovies.map((movie) => (
            <div
              key={movie.imdbID}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition"
            >
              <div
                className="absolute top-2 right-2 text-xl cursor-pointer"
                onClick={() => toggleFavorite(movie)}
              >
                {isFavorite(movie.imdbID) ? "❤️" : "🤍"}
              </div>

              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "/placeholder.jpg"
                }
                alt={movie.Title}
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />

              <button
                className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 text-sm rounded"
                onClick={() => navigate(`/movie/${movie.imdbID}`)}
              >
                WATCH NOW
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black/80 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} CineVerse. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;

