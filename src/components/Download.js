import React from 'react'
import logo from './logo.png'

const Download = () => {
    return (
        <div>
            <center>
            <img src={logo} height="400px" width="400px" alt="stev"/><br/><br/>
            <a href={logo} className="btn btn-primary" download="SteveJobs">Click to Download</a>
            </center>
        </div>
    )
}

export default Download
