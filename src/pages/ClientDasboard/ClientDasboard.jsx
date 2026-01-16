import React, { useEffect, useState } from 'react'
import { fetchBookings } from '../../api/Mockapi.js'
import './ClientDashboard.scss'

function ClientDashboard() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    ;(async () => {
      setBookings(await fetchBookings())
    })()
  }, [])

  return (
    <section className="client-dashboard">
      <h1 className="title">Vos réservations</h1>

      <div className="bookings-list">
        {bookings.map((b) => (
          <div key={b.id} className="booking-card">
            <div className="booking-header">
              <span className="client-name">{b.client}</span>
              <span className="booking-date">{b.date}</span>
            </div>

            <div className="booking-status">
              Statut : <strong>{b.status}</strong>
            </div>

            <div className="booking-actions">
              {b.status !== 'delivered' && (
                <button className="btn">
                  Payer / Confirmer
                </button>
              )}

              {b.status === 'delivered' && (
                <button className="btn secondary">
                  Télécharger les fichiers
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientDashboard
