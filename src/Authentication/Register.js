import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { nanoid } from '@reduxjs/toolkit';

function Register(props){
    const dispatch = useDispatch()

    const firstname = useRef('')
    const lastname = useRef('')
    const location = useRef('')
    const mobile = useRef('')
    const email = useRef('')
    const password = useRef('')


    function signUp(event){
        event.preventDefault()
        const key = "login"

        fetch('http://localhost:3001/Users', {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify({
                id: nanoid(),
                firstname: firstname.current.value,
                lastname: lastname.current.value,
                mobile: mobile.current.value,
                email: email.current.value,
                password: password.current.value
            })
        })
        .then(res=>{
            if(res.ok){
                dispatch({type: "LOGOUT"})
                dispatch({type: "KEY_UPDATE", payload: key})
                props.history.push('/login')
                return res.json()
            }
            else{
                alert("Check details")
            }
        })
    }

    return(
        <Card style={{marginLeft: "650px", marginTop: "100px", width: "500px"}}>
            <center><h1>REGISTER FORM</h1></center>
            <hr/>
            <Card.Text style={{marginLeft: "155px", marginTop: "10px"}}>
                <input type="firstname" placeholder="firstname" ref={firstname}/><br/><br/>
                <input type="lastname" placeholder="lastname" ref={lastname}/><br/><br/>
                <input type="location" placeholder="location" ref={location}/><br/><br/>
                <input type="mobile" placeholder="mobile" ref={mobile}/><br/><br/>
                <input type="email" placeholder="email" ref={email}/><br/><br/>
                <input type="password" placeholder="password" ref={password}/><br/><br/>
            </Card.Text>
            <Button variant="primary" type="submit" onClick={(e)=>signUp(e)}>
                Sign up
            </Button><br/>
            <span style={{marginLeft: "155px"}}>Already User? <Link to="/login" onClick={()=>{
                dispatch({type: "LOGOUT"})
                dispatch({type: "KEY_UPDATE", payload: "login"})
            }}>click</Link>to Login</span>
        </Card>
    )
}
export default Register;