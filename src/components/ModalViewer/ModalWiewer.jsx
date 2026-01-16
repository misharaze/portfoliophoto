import React from 'react'
import "./ModalViever.scss";


function ModalViewer({item, onClose}){
if(!item) return null
return (
<div className="modal-backdrop" onClick={onClose}>
<div className="modal" onClick={e=>e.stopPropagation()}>
<div className="hero" style={{backgroundImage:`url(${item.src})`}} />
<div className="info"><h3>{item.title}</h3><p>{item.category}</p></div>
<button className="btn" onClick={onClose}>Close</button>
</div>
</div>
)
}
export default ModalViewer;