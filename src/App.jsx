import './style.css';

function App() {
  return (
    <>
      <header>
        <h1>EST Sidi Bennour</h1>
        <nav>
          <a href="/">Accueil</a>
          <a href="/about">À propos</a>
          <a href="/departments">Filières</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section>
        <h1>Bienvenue à l'EST Sidi Bennour</h1>
        <p>Formation, innovation et excellence technologique.</p>

        <div className="cards">
          <div className="card">Nos Filières</div>
          <div className="card">Admission</div>
          <div className="card">Vie Étudiante</div>
        </div>
      </section>

      <footer>
        <p>© 2025 EST Sidi Bennour - Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default App;





