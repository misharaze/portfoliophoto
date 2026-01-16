import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.scss'

function Login({ setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Mock authentication
    if (email === 'client@example.com' && password === '1234') {
      setUser({ isAuth: true, role: 'client' })
      navigate('/client')
    } else if (email === 'admin@example.com' && password === '1234') {
      setUser({ isAuth: true, role: 'admin' })
      navigate('/admin')
    } else {
      setError('Email ou mot de passe incorrect')
    }
  }

  return (
    <section className="auth-container">
      <h1>Connexion</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn">
          Se connecter
        </button>

        {error && <div className="error">{error}</div>}
      </form>

      <p>
        Vous n’avez pas de compte ?{' '}
        <Link to="/register">Créer un compte</Link>
      </p>
    </section>
  )
}

export default Login
