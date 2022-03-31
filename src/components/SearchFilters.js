import React, { useState } from 'react'
import Data from './city.json'

const SearchFilters=()=>{
    const [search,setSearch]=useState('')
    return(
        <div>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            {Data.filter(value=>value.city.toLowerCase().includes(search.toLowerCase()))
            .map(item=><p style={{"border":"1px solid red","height":"40px","marginTop":"10px","fontSize":"20px","padding":"10px"}}>{item.city}</p>)
            }
        </div>
    )
}

export default SearchFilters