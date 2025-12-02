import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authStore } from '../utils/authStore'

type AuthPageProps = {
  mode: 'login' | 'signup'
}

export function AuthPage({ mode }: AuthPageProps) {
  const isSignup = mode === 'signup'
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  // Rediriger si déjà connecté
  useEffect(() => {
    if (authStore.isAuthenticated()) {
      navigate('/profile')
    }
  }, [navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (isSignup) {
      // Mode inscription
      if (password !== confirmPassword) {
        setError('Passwords do not match')
        return
      }
      setError('Sign up is not available yet. Please use login.')
    } else {
      // Mode connexion
      const success = authStore.login(username, password)
      if (success) {
        navigate('/profile')
      } else {
        setError('Invalid username or password')
      }
    }
  }

  return (
    <section className="auth-shell">
      <form className="auth-card" onSubmit={handleSubmit}>
        <p className="eyebrow">Access</p>
        <h1>{isSignup ? 'Sign up' : 'Login'}</h1>
        
        {error && <div className="auth-error">{error}</div>}
        
        <label>
          <span>{isSignup ? 'Email' : 'Username'}</span>
          <input
            type="text"
            placeholder={isSignup ? 'driver@cartime.app' : 'verasierro'}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {isSignup && (
          <label>
            <span>Confirm password</span>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        )}
        
        {!isSignup && (
          <p className="auth-hint">
            💡 Demo account: <strong>verasierro</strong> / <strong>12345</strong>
          </p>
        )}
        
        <button type="submit" className="primary-button full">
          {isSignup ? 'Create account' : 'Enter garage'}
        </button>
        <p className="auth-switch">
          {isSignup ? 'Already registered?' : 'New here?'}{' '}
          <Link to={isSignup ? '/login' : '/signup'}>
            {isSignup ? 'Login' : 'Create an account'}
          </Link>
        </p>
      </form>
    </section>
  )
}

