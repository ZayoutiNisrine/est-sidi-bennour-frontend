export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-10 max-w-md w-full bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-primary text-center">Contactez-nous</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-300 p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
