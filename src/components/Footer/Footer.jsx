import React from 'react'
import './Footer.scss'

export default function Footer(){
return (
<footer className="site-footer">
  <div className="container footer-inner">
    
    <div className="col brand-col">
      <div className="logo">Photo+<span className="dot">.</span></div>
      <p className="tag">
        Photographie cinématographique · Campagnes publicitaires · Portraits
      </p>
    </div>

    <div className="col links-col">
      <h4>Navigation</h4>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/gallery">Galerie</a></li>
        <li><a href="/about">À propos</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="col contact-col">
      <h4>Contact</h4>
      <p>hello@ivan.photo</p>
      <p>+7 (900) 000-00-00</p>
      <div className="socials">
        
        <a
    href="https://vk.com/your_profile"
    aria-label="VK"
    target="_blank"
    rel="noopener noreferrer"
  >
    VK
  </a>

  <a
    href="https://www.instagram.com/your_profile"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <a
    href="https://www.pinterest.com/your_profile"
    aria-label="Pinterest"
    target="_blank"
    rel="noopener noreferrer"
  >
    Pinterest
  </a>
      </div>
    </div>

    <div className="col newsletter-col">
      <h4>Newsletter</h4>
      <form className="newsletter" onSubmit={(e)=>e.preventDefault()}>
        <input placeholder="Email" />
        <button className="btn">S’abonner</button>
      </form>
    </div>

  </div>

  <div className="footer-bottom">
    <div className="container">
      <div className="left">
        © {new Date().getFullYear()} Photo+ — Tous droits réservés.
      </div>
      <div className="right">
        Conçu avec <span className="heart">❤</span>
      </div>
    </div>
  </div>

  <button
    className="back-to-top"
    onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}
  >
    ↑
  </button>
</footer>
)
}
