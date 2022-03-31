import React,{useState} from 'react'
import {Redirect,useHistory} from 'react-router-dom'
import '../App.css'
import logo from './logo.png'
import audio from './stevjobsspeech.mp3'
import video from './stevejobsvideo.mp4'

const Home = () => {
    // let history=useHistory();
    const [auth,setAuth]=useState(false)
    const [downloadpage,setDownloadpage]=useState(false)
    if(auth){
        return <Redirect to='/signup'/>
    }
    
    if (downloadpage){
        return <Redirect to='/Download'/>
    }
    return (
        <div>
            <h1>This is Home Page</h1>
            <button className="btn-sg" onClick={()=>setAuth(true)}>SignUp</button><br/><br/>
            <button className="btn-sg" onClick={()=>setDownloadpage(true)}>Download</button><br/><br/>
            {/* this history hook will accept only new version 'react-router-dom' i am using here old version 'react-router-dom' */}
            {/* <button className="btn-sg" onClick={()=>history.push('/search')}>Search</button> */}
            
            <img src={logo} height="350px" width="400px"/><br/><br/>
            
            <h2>Stevejobs Audio Speech</h2>
            <p>One of the Gretest Speeches Ever</p>
            <audio controls>
                <source src={audio} type="audio/mp3"/>
            </audio><br/><br/>
            
            <h2>Stevejobs Short Video</h2>
            <p>short video about stevejobs life story</p>
            <video width="350px" height="400px" controls>
                <source src={video} type="video/mp4"/>
            </video>
            
            <p>Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate,
                 industrial designer, investor, and media proprietor. He was the chairman, chief executive officer
                  (CEO), and co-founder of Apple Inc.;</p>
            {/* <button onClick={()=>history.push('/about')}>GotoAbout</button> */}
        </div>
    )
}

export default Home
