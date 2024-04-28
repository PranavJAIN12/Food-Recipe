import React from 'react'

export default function SearchBar(props) {

    

    

  return (
    <div className='searh container text-center'>
    <h2 className='text-center'>Our Recipe App</h2>
    <form onSubmit={props.handleSubmit}>
      
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for a food item..."
        value={props.search}
        onChange={props.handleChange}></input>
      <button className="btn btn-primary"type="submit">Search</button>
    </form>
      
    </div>
  )
}
