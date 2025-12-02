import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { path: '/map', label: 'Map' },
  { path: '/brands', label: 'Brands' },
  { path: '/blog', label: 'Blog' },
  { path: '/collections', label: 'Collections' },
  { path: '/profile', label: 'Profile' },
]

export function NavBar() {
  return (
    <header className="nav-shell">
      <div className="nav-logo">
        <span className="nav-dot" />
        <div>
          <p className="nav-subtitle">CarTime</p>
          <strong>Atlas</strong>
        </div>
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              ['nav-link', isActive ? 'is-active' : ''].filter(Boolean).join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="nav-actions">
        <Link to="/login" className="secondary-button">
          Login
        </Link>
        <Link to="/signup" className="primary-button">
          Sign up
        </Link>
      </div>
    </header>
  )
}

