import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Register.scss'

function Register({ setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('client')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock registration — connexion automatique après l’inscription
    setUser({ isAuth: true, role })
    if (role === 'admin') navigate('/admin')
    else navigate('/client')
  }

  return (
    <section className="auth-container">
      <h1>Inscription</h1>

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

        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="client">Client</option>
          <option value="admin">Administrateur</option>
        </select>

        <button type="submit" className="btn">
          Créer un compte
        </button>
      </form>

      <p>
        Vous avez déjà un compte ?{' '}
        <Link to="/login">Se connecter</Link>
      </p>
    </section>
  )
}

export default Register
