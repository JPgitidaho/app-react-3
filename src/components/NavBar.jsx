import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/details', label: 'Details' },
  { path: '/features', label: 'Features' },
  { path: '/projects', label: 'Projects' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center justify-center">
        {/* Botón hamburguesa en móviles */}
        <button
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú centrado horizontalmente en md+ */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-semibold">
          {links.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-blue-600 ${
                    isActive ? 'border-b-2 border-blue-600' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desplegable en móviles */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 text-gray-800 font-semibold">
          {links.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-blue-600 ${
                    isActive ? 'border-b-2 border-blue-600' : ''
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
