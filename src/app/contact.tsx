import Header from './components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea className="w-full p-2 border rounded" placeholder="Your Message"></textarea>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Send Message</button>
        </form>
      </main>
      <footer className="py-4 text-center">
        <p className="text-sm text-gray-600">© 2023 Atelier of Templates. All rights reserved.</p>
      </footer>
    </div>
  );
}
