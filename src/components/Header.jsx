import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl tracking-wide">EST Sidi Bennour</h1>
        <nav className="space-x-6 text-lg">
          <Link className="hover:text-accent transition" to="/">Accueil</Link>
          <Link className="hover:text-accent transition" to="/about">À propos</Link>
          <Link className="hover:text-accent transition" to="/departments">Filières</Link>
          <Link className="hover:text-accent transition" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}



