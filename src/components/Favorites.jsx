// src/components/Favorites.jsx
import { useNavigate } from "react-router-dom";

// Example favorite movies – in real app, this could come from localStorage or context
const favoriteMovies = [
  {
    imdbID: "tt3896198",
    Title: "Guardians of the Galaxy Vol. 2",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0848228",
    Title: "The Avengers",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk2NDU5MzQ3OF5BMl5BanBnXkFtZTcwNTU1ODI2Nw@@._V1_SX300.jpg",
  },
  // Add more favorites here
];

function Favorites() {
  const navigate = useNavigate();

  const handleWatchNow = (imdbID) => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Title */}
      <header className="p-4 bg-black bg-opacity-80 text-2xl font-bold text-center">
        Favorites
      </header>

      {/* Movie grid */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {favoriteMovies.map((movie) => (
            <div
              key={movie.imdbID}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-200"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                alt={movie.Title}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-64 2xl:h-80 object-cover"
              />
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

export default Favorites;

