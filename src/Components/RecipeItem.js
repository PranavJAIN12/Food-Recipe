import React from 'react'

export default function RecipeItem(props) {
  return (
    <div>
      <div className='container d-flex justify-content-center align-items-center'>
      <div className="card" style={{ width: "23rem", height: "auto" , marginTop: "4em" }}>
        <img src={props.imageUrl} className="card-img-top" alt="image not available" style={{height: '200px', width:'auto'}} />
        <div className="card-body">
          <h5 className="card-title">{props.title + ( props.category)}</h5>
          <p className="card-text">{props.description}</p>
          <p className='card-text'>belongs to: {props.area}</p>
          <span class="badge text-bg-danger" style={{
            display: 'flex', justifyContent: 'flex-end', right:'-10px', top: '0', position: 'absolute'
          }}>{props.sourceName}</span>   
                 {/* <a href={props.newsUrl} target='_blank' className={`btn btn-${props.mode==='dark'? 'dark': 'primary'}`} rel="noreferrer">Read More</a> */}
                 <button className=' mx-4 btn btn-danger' onClick={props.shareNews}>Share</button>
        </div>
      </div>
    </div>
    </div>
  )
}
