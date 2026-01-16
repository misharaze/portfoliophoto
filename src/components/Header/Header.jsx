import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.scss'

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({ isAuth: false, role: null });
    navigate('/');
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Photo+<span className="accent">.</span></div>

        <nav className="nav">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/gallery">Galerie</NavLink>
          <NavLink to="/about">À propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {!user.isAuth && (
            <>
              <NavLink to="/login">Connexion</NavLink>
              <NavLink to="/register">Inscription</NavLink>
            </>
          )}

          {user.isAuth && (
            <>
              {user.role === "client" && (
                <NavLink to="/client">Tableau de bord</NavLink>
              )}

              {user.role === "admin" && (
                <NavLink to="/admin">CRM</NavLink>
              )}

              <button className="logout-btn" onClick={handleLogout}>
                Déconnexion
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
