// src/components/ComingSoon.jsx

const comingSoonMovies = [
  {
    id: "1",
    title: "Starcourt",
    leadActor: "Millie Bobby Brown",
    releaseDate: "2025-02-15",
    type: "Movie",
    poster: "/starcourt.jpg",
  },
  // add more movies here
];

function ComingSoon() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-red-500 pl-4">
          Coming Soon
        </h1>

        {/* Movie Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoonMovies.map((movie) => (
            <div
              key={movie.id}
              className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Poster */}
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}

		<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>

                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">Lead Actor:</span>{" "}
                  {movie.leadActor}
                </p>
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">Release:</span>{" "}
                  {movie.releaseDate}
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  <span className="font-medium text-white">Type:</span>{" "}
                  {movie.type}
                </p>

                <button className="self-start bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm rounded-md transition">
                  Watch Trailer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;

