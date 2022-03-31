import React from 'react'
import '../App.css'

const About = ({match}) => {
    return (
        <div>
            <h1>This is About page:{match.params.name}</h1>
        </div>
    ) 
}

export default About
