import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/home?query=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('https://www.hdwallpapers.in/download/stranger_things_poster_hd_stranger_things-HD.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "100%", 
        backgroundPosition: "center 130%",
      }}
    >
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Top-left logo */}
      <div className="absolute top-6 left-6 z-10">
        <img
          src="/logo.png" //replace logo
          alt="CineVerse Logo"
          className="w-14 h-14 object-contain cursor-pointer
                     drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Top-right profile icon */}
      <div className="absolute top-6 right-6 z-10">
        <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-xl">
          👤
        </button>
      </div>

      {/* Main centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-white">
          CINE <span
  className="text-red-600"
  style={{ fontFamily: "'Irish Grover', cursive" }}
>
  VERSE
</span>

        </h1>

        {/* Search bar */}
        <div className="mt-10 flex items-center bg-white rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <input
            type="text"
            placeholder="enter movie name, actor or year"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-6 py-3 w-72 md:w-96 text-black-700 focus:outline-none hover:bg-red-600 transition"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-gray-100 font-bold hover:bg-gray-200 transition"
          >
            SEARCH
          </button>
        </div>

        {/* TO HOME button */}
        <button
          onClick={() => navigate("/home")}
          className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-3g hover:bg-red-900 transition"
        >
          TO HOME
        </button>
      </div>
    </div>
  );
}

export default LandingPage;



