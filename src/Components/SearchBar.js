import React,{useState} from 'react'

export default function SearchBar() {
    const[search, setSearch] = useState("")

    const handleSubmit=(e)=>{
        console.log("button clicked")
        e.preventDefault();
    }

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

  return (
    <div className='searh container text-center'>
    <h2 className='text-center'>Our Recipe App</h2>
    <form onSubmit={handleSubmit}>
      
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for a food item..."
        value={search}
        onChange={handleChange}></input>
      <button className="btn btn-primary"type="submit">Search</button>
    </form>
      
    </div>
  )
}
