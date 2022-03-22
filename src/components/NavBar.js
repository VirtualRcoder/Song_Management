import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function NavBar(){
    const User = useSelector((state)=>state.userReducer)
    const Key = useSelector((state)=>state.keyReducer)
    const dispatch = useDispatch()

    const [key, setKey] = useState(Key[0].key)
    
    useEffect(()=>{
        setKey(Key[0].key)
    }, [Key, User])

    if(User[0]){
        return(
            <Nav variant="tabs" activeKey={key} onSelect={(key)=>setKey(key)}>
                <Nav.Item style={{paddingRight: "30px", fontSize: "30px", color: "purple"}}>
                    <Link to="/playlist">
                        <Nav.Link href="playlist">Playlist-Management</Nav.Link>

                    </Link>
                </Nav.Item>
                <Nav.Item style={{paddingRight: "30px", fontSize: "30px", color: "purple"}}>
                    <Link to="/">
                        <Nav.Link href="song">Song Management</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>About</Nav.Item>
                <Nav.Item style={{paddingRight: "30px", fontSize: "30px", color: "purple"}}>
                    <Link to="/login">
                        <Nav.Link href="login" onClick={()=>{
                            dispatch({type: "LOGOUT"});
                            dispatch({type: "KEY_UPDATE", payload: "login"})
                        }}>Logout</Nav.Link>
                    </Link>
                </Nav.Item>
            </Nav>
        )
    }

    else{
        return(
            <Nav variant="tabs" activeKey={key} onSelect={(key)=>setKey(key)}>
                <Nav.Item style={{paddingRight: "30px", fontSize: "30px", color: "purple"}}>
                    <Link to="/playlist">
                        <Nav.Link href="playlist">Playlist-Management</Nav.Link>

                    </Link>
                </Nav.Item>
                <Nav.Item style={{paddingRight: "30px", fontSize: "30px", color: "purple"}}>
                    <Link to="/">
                        <Nav.Link href="song">Song Management</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>About</Nav.Item>
                <Nav.Item style={{paddingRight: "30px", fontSize: "30px", color: "purple"}}>
                    <Link to="/login">
                        <Nav.Link href="login">Login</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item style={{paddingRight: "30px", fontSize: "30px", color: "purple"}}>
                    <Link to="/register">
                        <Nav.Link href="register">Register</Nav.Link>
                    </Link>
                </Nav.Item>
            </Nav>
        )

    }
}

export default NavBar;