import React from "react";
import "../style.css"; // style global si tu as

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url("/est-sidi-bennour.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "20px", textShadow: "2px 2px 8px #000" }}>
        Bienvenue à l'EST Sidi Bennour
      </h1>
      <p style={{ fontSize: "1.8rem", marginBottom: "40px", textShadow: "1px 1px 5px #000" }}>
        Formation, innovation et excellence technologique
      </p>

      <div className="buttons-container" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <a href="/departments" className="btn green">Filières</a>
        <a href="/about" className="btn blue">À propos</a>
        <a href="/contact" className="btn purple">Contact</a>
      </div>
    </div>
  );
}

export default Home;



