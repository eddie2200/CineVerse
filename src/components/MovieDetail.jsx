// src/components/MovieDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_KEY = "85232622";

function MovieDetail() {
  const { id } = useParams(); // Get imdbID from URL
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        if (res.data.Response === "True") setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovie();
  }, [id]);

  if (!movie) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <header className="p-4 bg-black bg-opacity-80 flex justify-between items-center">
        <button
          className="text-black bg-white px-3 py-1 rounded hover:underline"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <h1 className="text-xl font-bold">{movie.Title}</h1>
      </header>

      {/* Movie details */}
      <div className="flex flex-col md:flex-row p-6 gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          alt={movie.Title}
          className="w-full md:w-1/3 h-auto rounded-lg"
        />
        <div className="flex-1 text-white">
          <p className="mb-2"><span className="font-bold">Year:</span> {movie.Year}</p>
          <p className="mb-2"><span className="font-bold">Rated:</span> {movie.Rated}</p>
          <p className="mb-2"><span className="font-bold">Released:</span> {movie.Released}</p>
          <p className="mb-2"><span className="font-bold">Genre:</span> {movie.Genre}</p>
          <p className="mb-2"><span className="font-bold">Director:</span> {movie.Director}</p>
          <p className="mb-2"><span className="font-bold">Actors:</span> {movie.Actors}</p>
          <p className="mb-2"><span className="font-bold">Plot:</span> {movie.Plot}</p>
          <p className="mb-2"><span className="font-bold">IMDB Rating:</span> {movie.imdbRating}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-80 text-center py-4 mt-auto">
        &copy; {new Date().getFullYear()} Cineflix. All rights reserved.
      </footer>
    </div>
  );
}

export default MovieDetail;

