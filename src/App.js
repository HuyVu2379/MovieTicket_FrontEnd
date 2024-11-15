import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage/Homepage';
import LoginPage from './components/Login/Login'
import Movie from './components/MovieList/Movie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie-details" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
