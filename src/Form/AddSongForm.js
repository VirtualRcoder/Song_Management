import { useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { Card, Button } from "react-bootstrap";

function AddSongForm(props){
    const movie = useRef()
    const length = useRef()
    const singer = useRef()
    const title = useRef()

    const dispatch = useDispatch()

    function addSong(){
        const song = { "id": nanoid(), "movie":  movie.current.value, "title": title.current.value, "length": length.current.value, "singer": singer.current.value}
        dispatch({type: "ADD_sONG", payload: song})
        props.history.push('/')
    }

    return(
        <Card style={{marginLeft: "650px", marginTop: "10px", width: "500px"}}>
            <center><Card.Title>AddSongForm</Card.Title></center>
            <Card.Text style={{marginLeft: "155px", marginTop: "10px"}}>
                <input type="text" ref={movie} placeholder="Enter movie"/><br/>
                <input type="text" ref={title} placeholder="Enter title"/><br/>
                <input type="text" ref={length} placeholder="Enter length"/><br/>
                <input type="text" ref={singer} placeholder="Enter singer"/><br/>
                <Button style={{marginLeft: "35px"}} onClick={addSong}>Submit</Button>
            </Card.Text>
        </Card>
    )
}

export default AddSongForm;