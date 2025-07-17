import { NavLink } from 'react-router-dom';

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
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <ul className="flex justify-center gap-6 text-gray-800 font-semibold">
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
    </nav>
  );
}
