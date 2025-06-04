import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-gray-800">Mi Portafolio</div>
        <div className="hidden md:flex space-x-6">
          <a href="#inicio" className="text-gray-700 hover:text-blue-500">
            Inicio
          </a>
          <a href="#sobre-mi" className="text-gray-700 hover:text-blue-500">
            Sobre mí
          </a>
          <a href="#proyectos" className="text-gray-700 hover:text-blue-500">
            Proyectos
          </a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-500">
            Contacto
          </a>
        </div>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <a href="#inicio" className="block text-gray-700 hover:text-blue-500">
            Inicio
          </a>
          <a
            href="#sobre-mi"
            className="block text-gray-700 hover:text-blue-500"
          >
            Sobre mí
          </a>
          <a
            href="#proyectos"
            className="block text-gray-700 hover:text-blue-500"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="block text-gray-700 hover:text-blue-500"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
