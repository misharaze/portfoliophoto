import React, { useEffect, useState } from 'react'
import { fetchGallery } from '../../api/Mockapi'
import ModalViewer from '../../components/ModalViewer/ModalWiewer'
import "./Gallery.scss"

function Gallery() {
  const [open, setOpen] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    async function load() {
      const g = await fetchGallery()
      setItems(g)
    }
    load()
  }, [])

  const categories = [
    "Mariage",
    "Portrait",
    "Éditorial",
    "Intérieurs",
    "Paysage",
    "Événement",
    "Animaux",
    "Famille"
  ]

  const grouped = categories.map(cat => ({
    name: cat,
    items: items
      .filter(i => i.category === cat.toLowerCase())
      .slice(0, 4)
  }))

  return (
    <section className="gallery container">
      <h1>Galerie de mes réalisations</h1>

      <div className="category-row">
        {grouped.map(block => (
          <div className="category-block" key={block.name}>
            <h2 className="category-title">{block.name}</h2>

            <div className="collage">
              {block.items.map(it => (
                <div
                  key={it.id}
                  className="collage-item"
                  style={{ backgroundImage: `url(${it.src})` }}
                  onClick={() => setOpen(it)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {open && <ModalViewer item={open} onClose={() => setOpen(null)} />}
    </section>
  )
}

export default Gallery
