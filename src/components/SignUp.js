import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import '../App.css'

const SignUp=()=>{
    const [data,setData]=useState({
        email:'',
        password:''
    })
    const {email,password}=data
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const eventHandler=(e)=>{
        e.preventDefault()
        axios.post('https://raju-demo-ef393-default-rtdb.firebaseio.com/signup.json',data).then(()=>alert("Submitted successfull"))
        console.log(data)
    }

    return(
        <div className="sign">
        <div className="form">
            <Form onSubmit={eventHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" value={email} onChange={changeHandler}  placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" value={password} onChange={changeHandler} placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    </div>
    )
}

export default SignUp