import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { path: '/map', label: 'Map' },
  { path: '/brands', label: 'Brands' },
  { path: '/blog', label: 'Blog' },
  { path: '/collections', label: 'Collections' },
  { path: '/profile', label: 'Profile' },
]

import { useState, useEffect } from 'react'
import { authStore } from '../utils/authStore'

export function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(authStore.isAuthenticated())

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(authStore.isAuthenticated())
    }

    window.addEventListener('auth-changed', handleAuthChange)
    return () => window.removeEventListener('auth-changed', handleAuthChange)
  }, [])

  return (
    <header className="nav-shell">
      <div className="nav-logo">
        <svg className="nav-car-icon" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Contour de voiture de profil */}
          {/* Carrosserie principale */}
          <path
            d="M10 28 L12 26 L16 24 L20 22 L28 20 L38 18 L48 18 L56 20 L62 22 L66 24 L68 26 L70 28 L70 30 L68 32 L10 32 L8 30 Z"
            stroke="#7ec8e3"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Toit et fenêtres */}
          <path
            d="M28 20 L30 14 L34 12 L46 12 L50 14 L52 18"
            stroke="#7ec8e3"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Roue avant */}
          <circle cx="22" cy="32" r="6" stroke="#7ec8e3" strokeWidth="2.5" />
          <circle cx="22" cy="32" r="3" stroke="#7ec8e3" strokeWidth="1.5" />
          {/* Roue arrière */}
          <circle cx="58" cy="32" r="6" stroke="#7ec8e3" strokeWidth="2.5" />
          <circle cx="58" cy="32" r="3" stroke="#7ec8e3" strokeWidth="1.5" />
        </svg>
        <span className="nav-brand">CARTIME</span>
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
        {isAuthenticated ? (
          <Link to="/profile" className="primary-button">
            Profile
          </Link>
        ) : (
          <>
            <Link to="/login" className="secondary-button">
              Login
            </Link>
            <Link to="/signup" className="primary-button">
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

