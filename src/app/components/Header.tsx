import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-xl font-bold">Atelier of Templates</a>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/about"><a className="text-gray-700 hover:text-gray-900 transition">About</a></Link>
            <Link href="/services"><a className="text-gray-700 hover:text-gray-900 transition">Services</a></Link>
            <Link href="/contact"><a className="text-gray-700 hover:text-gray-900 transition">Contact</a></Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
          </div>
        </div>
      </div>
    </header>
  );
}
