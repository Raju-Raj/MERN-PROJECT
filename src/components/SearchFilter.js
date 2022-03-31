import React,{useState} from 'react'
import Data from './city.json'

const SearchFilter = () => {
    const [search,setSearch]=useState('');
    return (
        <div>
            <center>
            <h1>Search Hyderabad Cities:</h1>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
            {Data.filter(data=>data.city.toLowerCase().includes(search.toLowerCase()))
            .map(data=><p style={{"color":"green","border":"2px solid red","padding":"10px","maxWidth":"700px","margin":"10px"}}>
                {data.city}
                </p>)}
            </center>
        </div>
    )
}

export default SearchFilter
