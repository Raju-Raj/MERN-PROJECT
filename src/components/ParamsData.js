import React ,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'

const ParamsData = () => {
    const [data,setData]=useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(value=>setData(value))
    }, [])

    return (
        <div>
            {data.length>=1?data.map(data=>{
                return <div style={{"border":"1px solid black","padding":"10px","margin":"10px"}}>
                    <Link to={`/data/${data.id}`}>{data.title}</Link>
                    </div>
            }):null
        }
        </div>
    )
}

export default ParamsData
