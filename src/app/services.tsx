import Header from './components/Header';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-lg">Custom Website Templates</li>
          <li className="text-lg">Responsive Design Implementation</li>
          <li className="text-lg">UI/UX Design Consultation</li>
          <li className="text-lg">Brand Identity and Enhancement Tools</li>
        </ul>
      </main>
      <footer className="py-4 text-center">
        <p className="text-sm text-gray-600">© 2023 Atelier of Templates. All rights reserved.</p>
      </footer>
    </div>
  );
}
