import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.scss'

function Landing() {
return (
<section className="hero container">

  <div
    className="hero-top"
    style={{
      display:'grid',
      gridTemplateColumns:'1fr 420px',
      gap:'36px',
      alignItems:'center'
    }}
  >
    <div>
      <h1>Photographie cinématographique et identité visuelle</h1>
      <p>
        Portraits grand format, reportages de mariage et photographie commerciale
        avec une approche cinématographique.
      </p>

      <div style={{ marginTop:20 }}>
        <Link to="/gallery" className="btn">
          Voir les réalisations
        </Link>
        <Link to="/contact" className="btn" style={{ marginLeft:12 }}>
          Réserver une séance
        </Link>
      </div>
    </div>

    <div className="card">
      <img
        src="https://www.aaronreedphotography.com/images/xl/Royalty-2018.jpg"
        alt="hero"
      />
    </div>
  </div>

  <section className="services" style={{ marginTop:40 }}>
    <h2>Services</h2>
    <div style={{ display:'flex', gap:12, marginTop:12 }}>
      <div className="card service-card">Portrait</div>
      <div className="card service-card">Mariage</div>
      <div className="card service-card">Commercial</div>
      <div className="card service-card">Animaux</div>
      <div className="card service-card">Événement</div>
      <div className="card service-card">Famille</div>
    </div>
  </section>

  <section className="gallery-preview">
    <h2>Meilleures réalisations</h2>
    <div
      className="hero-gallery"
      style={{
        marginTop:12,
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
        gap:16
      }}
    >
      <div className="card">
        <img src="https://www.viewbug.com/media/mediafiles/2014/09/12/32308121_medium.jpg" alt="sample" />
      </div>
      <div className="card">
        <img src="https://photobugcommunity.com/wp-content/uploads/2023/02/Phosphilic.jpg" alt="sample" />
      </div>
      <div className="card">
        <img src="https://5.imimg.com/data5/SELLER/Default/2024/3/404545417/TO/QD/MB/151208417/model-portfolio-photography-service.jpg" alt="sample" />
      </div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJAg8ZkcU07jFXpq82PgDDsynAC4_LPzIFA&s" alt="sample" />
      </div>
    </div>
  </section>

  <section className="testimonials" style={{ marginTop:40 }}>
    <h2>Avis clients</h2>
    <div style={{ display:'flex', gap:16, marginTop:12 }}>
      <div className="card service-card">
        “Un travail exceptionnel, les photos sont tout simplement magiques !” — Anna
      </div>
      <div className="card service-card">
        “Approche professionnelle et idées créatives.” — Serge
      </div>
    </div>
  </section>

  <section className="cta" style={{ marginTop:40, textAlign:'center' }}>
    <h2>Prêt pour une séance photo ?</h2>
    <Link to="/contact" className="btn" style={{ marginTop:12 }}>
      Me contacter
    </Link>
  </section>

</section>
)
}

export default Landing
