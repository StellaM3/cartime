import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { authStore } from '../utils/authStore'
import type { User } from '../utils/authStore'

export function ProfilePage() {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(authStore.getCurrentUser())
  const notificationTags = ['Weekly drop digest']

  useEffect(() => {
    const handleAuthChange = () => {
      setUser(authStore.getCurrentUser())
    }

    window.addEventListener('auth-changed', handleAuthChange)
    return () => window.removeEventListener('auth-changed', handleAuthChange)
  }, [])

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      authStore.logout()
      navigate('/login')
    }
  }

  // Rediriger vers login si non connecté
  if (!user) {
    return <Navigate to="/login" replace />
  }

  const accountDetails = [
    { label: 'City', value: user.city },
    { label: 'Driving style', value: user.drivingStyle },
    { label: 'Membership', value: user.membership },
  ]

  return (
    <section className="profile-shell">
      <div className="page-heading">
        <p className="eyebrow">Member space</p>
        <h1>Profile</h1>
      </div>

      <div className="profile-card profile-hero">
        <div className="profile-id">
          <img
            src={user.avatar}
            alt={user.name}
            className="profile-avatar"
          />
          <p className="profile-name">{user.name}</p>
          <p className="profile-meta">Premium member · Collection sync active</p>
        </div>
        <div className="profile-actions">
          <button className="secondary-button">Update password</button>
          <button className="primary-button">Edit my information</button>
        </div>
      </div>

      <div className="profile-grid">
        <article className="profile-panel compact">
          <h2>Details</h2>
          <dl className="profile-stats">
            {accountDetails.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className="profile-panel compact">
          <h2>Favorite car brands</h2>
          <div className="chip-list">
            {user.favoriteBrands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </article>

        <article className="profile-panel compact">
          <h2>Notifications</h2>
          <div className="chip-list">
            {notificationTags.map((pref) => (
              <span key={pref}>{pref}</span>
            ))}
          </div>
        </article>

        <article className="profile-panel wide">
          <h2>Account actions</h2>
          <div className="profile-actions-list">
            <button className="ghost-button danger-action" onClick={handleLogout}>
              🚪 Log out
            </button>
          </div>
        </article>

      </div>
    </section>
  )
}

