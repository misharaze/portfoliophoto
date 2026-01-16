import React from 'react'
import './Loading.scss'


export default function Loading() {
return (
<div className="loading-screen">
<div className="loader-circle">
<div className="glow" />
</div>
<p className="loading-text">Chargement...</p>
</div>
)
}