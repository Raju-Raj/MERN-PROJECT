import React, { useState,useEffect } from 'react'

const Individualdata = ({match}) => {
    const [ind,setind]=useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`)
        .then(response=>response.json())
        .then(data=>setind(data))
    }, [])
    return (
        <div>
            {ind!==null?
            <div style={{"border":"2px solid black","width":"500px","height":"auto","margin":"10px"}}>
                id:{ind.id}<br/>
                Title:{ind.title}

            </div>:null
            }
        </div>
    )
}

export default Individualdata
