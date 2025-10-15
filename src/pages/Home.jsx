export default function Home() {
  return (
    <section className="p-10 text-center bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-6 text-primary">
        Bienvenue à l'EST Sidi Bennour
      </h1>
      <p className="text-lg mb-8 text-gray-700">
        Formation, innovation et excellence technologique.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="border rounded-lg p-6 shadow-lg hover:scale-105 transition bg-white">
          Nos Filières
        </div>
        <div className="border rounded-lg p-6 shadow-lg hover:scale-105 transition bg-white">
          Admission
        </div>
        <div className="border rounded-lg p-6 shadow-lg hover:scale-105 transition bg-white">
          Vie Étudiante
        </div>
      </div>
    </section>
  );
}

