import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, Badge, Button } from "react-bootstrap";

import SongDetail from './SongDetail';

function Song(props){
    if(props.location.state){
        if(props.location.state[0]=='playlist'){
            props.history.push(props.location.state[0])
        }
    }

    const Songs = useSelector((state)=>state.songReducer)
    const User = useSelector((state)=>state.userReducer)
    const dispatch = useDispatch()

    const [songs, setSongs] = useState([])
    const Song = useRef()

    function addSong(){
        if(User[0]){
            props.history.push('/addSongForm')
        }
        else{
            props.history.push('/login')
        }
    }

    useEffect(()=>{
        setSongs(Songs)
    },[Songs])

    return(
        <Card style={{marginLeft: "380px", width: "1100px"}}>
            <div>
                <Button style={{float: "right", width: "110px"}} onClick={()=>addSong()}>+Add</Button>
                <h1>LIST OF AVAILABLE SONGS<Badge bg="info">{songs.length}</Badge></h1>
            </div>

            <Card.Body>
                <br/><br/>
                {
                    songs.map((song)=>{
                        return(
                            <SongDetail title={song.title} movie={song.movie} length={song.length} singer={song.singer} ID={song.id} flag={true}/>
                        )
                    })
                }
            </Card.Body>
        </Card>
    )   
}

export default Song;