import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Table } from "react-bootstrap";

import Playlist from './Playlist';
import { nanoid } from "@reduxjs/toolkit";

function PlaylistPage(props){
    const Playlists = useSelector((state)=>state.playlistReducer)
    const User = useSelector((state)=>state.userReducer)
    const dispatch = useDispatch()
    
    const playlist = useRef()

    const [playlists, setplaylists] = useState([])

    function addPlaylist(){
        if(User[0]){
            const song = { "id": nanoid(), "name": playlist.current.value, "songsId": [] }
            dispatch({type: "ADD_PLAYLIST", payload: song})
            props.history.push('/playlist')
        }
        else{
            props.history.push('/login')
        }
    }

    useEffect(()=>{
        setplaylists(Playlists)
    },[Playlists])


    return(
      <div>

          <div style={{paddingleft: "200px"}}>
              <input placeholder="Paylist Name" ref={playlist}/>
              <Button variant="secondary" onClick={()=>addPlaylist()}>+Add</Button> <br/><br/>
              <Table>
                  <tbody>
                      {
                          playlists.map((playlist)=>{
                              return (
                                  <Playlist playlist={playlist} flag={false}/>
                              )
                          })
                      }
                  </tbody>
              </Table>
              </div>        
      </div>
    );
}

export default PlaylistPage 