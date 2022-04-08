import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Authentication(props){
    const Users = useSelector((state)=>state)
    const dispatch = useDispatch()

    const email = useRef('')
    const password = useRef('')

    const [users, setUsers] = useState([])

    function auth(event){
        event.preventDefault()
        const key = "playlist"
 
        users.map((user)=>{
            if(email.current.value===user.email && password.current.value==user.password){
                dispatch({type: "PROFILE", payload: user})
                dispatch({type: "KEY_UPDATE", payload: key})
                props.history.push('/playlist')
            }
        })
    }

    useEffect(()=>{
        fetch('http://localhost:3001/Users')
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setUsers(res)
        })
    },[])

    return(
        <Card style={{marginLeft: "650px", marginTop: "100px", width: "500px"}}>
            <center><h1>LOGIN FORM</h1></center>
            <hr/>
            <Card.Text style={{marginLeft: "155px", marginTop: "10px"}}>
                <input type="email" placeholder="email" ref={email}/><br/><br/>
                <input type="password" placeholder="password" ref={password}/><br/><br/>
            </Card.Text>
            <Button variant="primary" type="submit" onClick={(e)=>auth(e)}>
                Login
            </Button><br/>
            <span style={{marginLeft: "155px"}}>New User? <Link to="/register" onClick={()=>{
                dispatch({type: "LOGOUT"})
                dispatch({type: "KEY_UPDATE", payload: "register"})
            }}>click</Link>to Register</span>
        </Card>
    )
}
export default Authentication;