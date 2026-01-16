import React from 'react'
import './GalleryGrid.scss'


 function GalleryGrid({items, onOpen}){
return (
<div className="gallery-grid">
{items.map(it=> (
<div key={it.id} className="card" onClick={()=>onOpen(it)}>
<div className="img" style={{backgroundImage:`url(${it.src})`}} />
<div className="meta"><div className="title">{it.title}</div></div>
<div className="category">{it.category}</div> 
</div>
))}
</div>
)
}
export default GalleryGrid;