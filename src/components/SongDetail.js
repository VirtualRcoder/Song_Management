import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Card, Badge, Button, Badge } from "react-bootstrap";

function SongDetail(props){
    const User = useSelector((state)=>state.userReducer)
    const dispatch = useDispatch()
    const history = useHistory()

    const editMovie = useRef('')
    const editSinger = useRef('')
    const editLength = useRef('')

    const [movie, setMovie] = useState('')
    const [length, setLength] = useState('')
    const [singer, setSinger] = useState('')

    const [edit, setEdit] = useState(false)
    const [songDisplay, setSongDisplay] = useState(false)

    function handleEdit(){
        if(User[0]){
            setEdit(true)
        }

        else{
            history.push('/login')
        }
    }

    function handleRemove(){
        if(User[0]){
            dispatch({type: "REMOVE_SONG", payload: {songID: props.ID, playlist: props.playlist}})
            history.push({pathname: "/", state: ["/playlist"]})
        }
        else{
            history.push('/login')
        }
    }

    function handleDelete(){
        if(User[0]){
            setSongDisplay(false)
            dispatch({type: "DELETE_SONG", payload: props.ID})
        }
        else{
            history.push('/login')
        }
    }

    function handleDetail(){
        if(User[0]){
            setSongDisplay(!songDisplay)
        }
        else{
            history.push('/login')
        }
    }

    useEffect(()=>{
        if(songDisplay===true){
            setMovie("Movie: " + props.movie)
            setMovie("Length: " + props.length)
            setMovie("Singer: " + props.singer)
        }
        else{
            setMovie([])
            setLength([])
            setSinger([])
        }
    },[songDisplay, props])

    if(props.flag){
        if(edit){
            return(
                <Card style={{marginLeft: "30px", paddingTop: "10px", width: "1000px"}}>
                    <Card.Title style={{marginLeft: "70px"}}>
                        {props.title}<br/><br/>
                    </Card.Title>
                    <Card.Text style={{marginLeft: "400px"}}>
                        <input type="text" ref={editMovie} defaultValue={props.movie}/><br/>
                        <input type="text" ref={editSinger} defaultValue={props.singer}/><br/>
                        <input type="text" ref={editLength} defaultValue={props.length}/><br/>
                        <Button variant="success" style={{marginLeft: "25px", width: "120px"}} onClick={()=>{
                            dispatch({type: "EDIT_SONG", payload: {id: props.ID, title: props.title, movie: editMovie.current.value, singer: editSinger.current.value, length: editLength.current.value}})
                            setEdit(false)
                        }}>Save</Button>
                    </Card.Text>
                </Card>
            )
        }
        else{
            return(
                <Card style={{marginLeft: "30px", paddingTop: "10px", width: "1000px"}}>
                    <Card.Title style={{marginLeft: "70px"}}>
                        <span>{props.title}</span>
                        <Button variant="danger" style={{float: "right", width: "120px"}} onClick={handleDelete}>Delete</Button>
                        <Button variant="warning" style={{float: "right", width: "120px"}} onClick={handleEdit}>Edit</Button>
                        <Button variant="secondary" style={{float: "right", width: "120px"}} onClick={handleDetail}>details</Button>
                    </Card.Title>
                    <Card.Text>
                        <Table striped bordered hover>
                            <tbody>
                                <tr><td>{movie}</td></tr>
                                <tr><td>{singer}</td></tr>
                                <tr><td>{length}</td></tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card>
            )
        }
    }

    else{
        return(
            <Card style={{marginLeft: "90px", paddingTop: "10px", width: "1000px"}}>
                <Card.Title>
                    {props.title}<br/><br/>
                    <Button variant="danger" style={{width: "120px"}} onClick={handleRemove}>Remove</Button>
                    <Button variant="secondary" style={{width: "120px"}} onClick={handleDelete}>details</Button>
                </Card.Title>
                <Card.Text>
                    <Table striped bordered hover>
                        <tbody>
                            <tr><td>{movie}</td></tr>
                            <tr><td>{singer}</td></tr>
                            <tr><td>{length}</td></tr>
                        </tbody>
                    </Table>
                </Card.Text>
            </Card>
        )

    }
}