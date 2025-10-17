import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import './style.css';

function App() {
  return (
    <Router>
      <header className="bg-green-700 text-white p-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">EST Sidi Bennour</h1>
          <nav className="space-x-4">
            <Link className="hover:text-yellow-300" to="/">Accueil</Link>
            <Link className="hover:text-yellow-300" to="/about">À propos</Link>
            <Link className="hover:text-yellow-300" to="/departments">Filières</Link>
            <Link className="hover:text-yellow-300" to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-green-700 text-white text-center p-4">
        © 2025 EST Sidi Bennour - Tous droits réservés.
      </footer>
    </Router>
  );
}

export default App;
