import React from "react";
import "./AdminCRM.scss";

function AdminCRM() {
  return (
    <section className="admin-crm container">

      <div className="page-header">
        <h1>Espace personnel</h1>
        <p>Gestion des séances, des demandes, de la galerie et des clients.</p>
      </div>

      <div className="dashboard">
        <div className="dash-card">
          <span className="value">12</span>
          <span className="label">Demandes</span>
        </div>

        <div className="dash-card">
          <span className="value">4</span>
          <span className="label">Séances à venir</span>
        </div>

        <div className="dash-card">
          <span className="value">128</span>
          <span className="label">Photos dans la galerie</span>
        </div>

        <div className="dash-card">
          <span className="value">7</span>
          <span className="label">Nouveaux clients</span>
        </div>
      </div>

      <div className="card">
        <h3>Réservations</h3>

        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Date</th>
              <th>Statut</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Anna</td>
              <td>2025-12-02</td>
              <td>
                <span className="tag green">Confirmée</span>
              </td>
              <td style={{ textAlign: "right" }}>
                <button className="btn small">Terminé</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
}

export default AdminCRM;
