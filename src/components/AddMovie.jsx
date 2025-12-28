import { useState } from "react";

function AddMovieForm() {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !overview) {
      setError("All fields are required");
      return;
    }

    setError("");
    alert("Movie submitted successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Movie Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Movie Overview"
          className="w-full border p-2 rounded"
          rows="4"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovieForm;

