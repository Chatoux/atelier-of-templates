import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative flex items-center justify-center bg-cover bg-center h-[500px]" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
          <div className="bg-opacity-50 bg-black p-10 rounded-md text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Atelier of Templates</h1>
            <p className="text-lg text-gray-300 mb-6">Crafting visually compelling web templates for your business needs</p>
            <a href="/services" className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">Explore Our Services</a>
          </div>
        </section>
      </main>
      <footer className="py-4 text-center">
        <p className="text-sm text-gray-600">© 2023 Atelier of Templates. All rights reserved.</p>
      </footer>
    </div>
  );
}
