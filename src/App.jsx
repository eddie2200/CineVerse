import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieDetail from "./components/MovieDetail";
import AddMovieForm from "./components/AddMovieForm";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Favorites from "./components/Favorites";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/add-movie" element={<AddMovieForm />} />
      </Routes>
    </Router>
  );
}

export default App;

