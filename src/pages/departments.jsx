export default function Departments() {
  const filieres = ["Génie Informatique", "Génie Électrique", "Techniques de Management"];
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-primary">Nos Filières</h2>
      <ul className="list-disc pl-6 text-gray-700 text-lg">
        {filieres.map((filiere, i) => <li key={i}>{filiere}</li>)}
      </ul>
    </div>
  );
}

