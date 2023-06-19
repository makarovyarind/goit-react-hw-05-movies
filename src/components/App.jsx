import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

const App = () => {
  return (
    <Router basename='/'>
      <header>
        <nav className="navigation">
          <NavLink className="nav-link" to="/" >
            Home
          </NavLink>
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} /> 
           </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;