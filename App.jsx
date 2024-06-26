import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home";
import StorePage from "./components/StorePage";
import AboutPage from "./components/AboutPage";
import CartPage from "./components/CartPage";
import AppProvider from "./Context";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <Router>
      <AppProvider>
        <ToastContainer pauseOnHover autoClose={1500} position="top-center" />
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
