import React from 'react';
import './About.scss';

export default function About() {
return (
<div className="about-page">
  <div className="hero">
    <h1>À propos de moi</h1>
    <p className="subtitle">
      Photographe / Designer — je crée des histoires à travers la lumière et l’émotion
    </p>
  </div>

  <div className="content-container">
    <div className="photo-block">
      <div className="portrait" />
    </div>

    <div className="text-block">
      <h2>Mon histoire</h2>
      <p>
        Bonjour ! Je m’appelle Ivan — je suis photographe et designer, passionné par la
        lumière dramatique, les accents néon et les scènes cinématographiques. Depuis
        plus de 7 ans, je crée des projets visuels pour des marques, des artistes, des
        entreprises et des clients privés. Pour moi, chaque séance photo est un film à
        part entière, où je suis le réalisateur de la lumière et des émotions.
      </p>

      <h2>Mon style</h2>
      <p>
        Je travaille dans une esthétique sombre et cinématographique : ombres profondes,
        lumière atmosphérique, contrastes marqués et transitions visuelles fortes. En
        design, j’adopte la même approche — minimalisme, élégance et profondeur.
      </p>

      <h2>Pourquoi je fais ce métier</h2>
      <p>
        J’aime transformer les émotions des personnes et des marques en histoires
        visuelles. Capturer la vie de manière à ce qu’elle ressemble à une scène de film.
        Et offrir à mes clients bien plus que de simples photos : une expérience, des
        émotions et des souvenirs.
      </p>
    </div>
  </div>
</div>
);
}
