import Header from './components/Header';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">Atelier of Templates specializes in creating beautifully crafted website designs tailored for businesses looking to enhance their digital presence. With a focus on aesthetics and functionality, our mission is to bring your vision to life on the web.</p>
        <p className="text-lg">Founded by a team of experienced designers and developers, we understand the market's demands and strive to deliver templates that are not only visually appealing but also user-friendly and responsive.</p>
      </main>
      <footer className="py-4 text-center">
        <p className="text-sm text-gray-600">© 2023 Atelier of Templates. All rights reserved.</p>
      </footer>
    </div>
  );
}
