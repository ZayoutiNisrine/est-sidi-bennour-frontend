import React from "react";

function Departments() {
  return (
    <div className="departments min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
        Nos Filières
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* GI - Génie Informatique */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-green-600 mb-4">GI - Génie Informatique</h2>
          <p className="mb-3">
            La filière Génie Informatique forme des professionnels capables de concevoir, développer et gérer des systèmes informatiques complexes.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Programmation et développement logiciel</li>
            <li>Base de données et systèmes d’information</li>
            <li>Réseaux et cybersécurité</li>
            <li>Projets innovants et stage en entreprise</li>
          </ul>
        </div>

        {/* TM - Technologie Multimédia */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">TM - Technologie Multimédia</h2>
          <p className="mb-3">
            La filière Technologie Multimédia prépare les étudiants aux métiers de la création digitale et de la communication visuelle.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Design graphique et web design</li>
            <li>Production audiovisuelle et animation</li>
            <li>Marketing digital et communication</li>
            <li>Projets créatifs et stage professionnel</li>
          </ul>
        </div>

        {/* GA - Génie Agro-Environnement */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">GA - Génie Agro-Environnement</h2>
          <p className="mb-3">
            La filière GA se concentre sur les techniques agricoles durables et la protection de l’environnement.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Gestion des ressources naturelles</li>
            <li>Techniques agricoles innovantes</li>
            <li>Protection de l’environnement et écologie</li>
            <li>Projets terrain et stages pratiques</li>
          </ul>
        </div>

        {/* GE - Génie Équin */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-red-600 mb-4">GE - Génie Équin</h2>
          <p className="mb-3">
            La filière GE forme des spécialistes dans l’élevage et la gestion des chevaux, ainsi que dans la reproduction et la santé équine.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Élevage et alimentation équine</li>
            <li>Soins vétérinaires et santé animale</li>
            <li>Reproduction et génétique équine</li>
            <li>Projets pratiques et stages en haras</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Departments;
