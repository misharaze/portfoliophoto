import React, { useState } from 'react'
import { submitContact } from '../../api/Mockapi.js'
import "./Contact.scss"

function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const res = await submitContact(form)
    if(res.ok) setStatus('ok')
    else setStatus('error')
  }

  return (
    <section className="container">
      <h1>Contact</h1>

      <form onSubmit={onSubmit} style={{ display:'grid', gap:12, maxWidth:560 }}>
        <input
          placeholder="Nom"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Parlez-moi de votre projet photo"
          rows={6}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />

        <button className="btn" type="submit">
          Envoyer
        </button>

        {status === 'ok' && (
          <div>
            Merci ! Nous vous contacterons très prochainement.
          </div>
        )}
      </form>
    </section>
  )
}

export default Contact;
