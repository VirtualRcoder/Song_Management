import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Button, Badge } from "react-bootstrap";

import SongDetail from './SongDetail';

function  Playlist(props){
    const Songs = useSelector((state)=>state.songReducer)
    const User = useSelector((state)=>state.userReducer)

    const history = useHistory()

    const [songs, setSongs] = useState([])
    const [flag, setFlag] = useState(props.flag)
    const [counts, setCounts] = useState()

    function add(){
        if(User[0]){
            history.push({pathname: "/addSongToPlaylist", state: {props}})
        }

        else{
            history.push({pathname: "/login"})
        }
    }

    useEffect(()=>{
        const song = []

        Songs.map((so)=>{
            props.playlist.songsId.map((i)=>{
                    if(so.id==i){
                        song.push(so)
                    }
            })
        })

        setCounts(song.length)

        if(flag){
            setSongs(song)
        }
        else{
            setSongs([])
        }
    }, [flag, props.playlist])

    return(
        <div>
            <tr>
                <td><h1>{props.playlist.name}</h1></td><td><h3><Badge bg="info">{counts}</Badge></h3></td>
                <td style={{float: "right"}}><Button variant="danger" style={{width: "136px"}} onClick={add}>+AddSong</Button></td>
                <td style={{float: "right"}}><Button style={{width: "136px"}} onClick={()=>{setFlag(!flag)}}>detail</Button></td>
            </tr>
            <tr>
                {
                    songs.map((song)=>{
                        return(
                            <SongDetail title={song.title} movie={song.movie} length={song.length} singer={song.singer} ID={song.id} playlist={props.playlist.id} flag={false}/>
                        )
                    })
                }
            </tr>
            <br/>
        </div>
    )
}

export default Playlist;