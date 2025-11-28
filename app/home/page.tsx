export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to MySite 👋
      </h1>

      <p className="text-gray-600 text-lg text-center max-w-md">
        This is your home page — a great place to introduce your app or project.
      </p>

      <div className="mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}