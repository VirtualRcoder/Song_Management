import { useRef, useState} from "react"
import { useDispatch, useSelector } from "react-redux";

 function AddToPlaylistForm(props){
    const [songs, setSongs] = useState([])
    const Song = useRef()
    const [flag, setFlag] = useState(true)

    const Songs=useSelector((state)=>state.songReducer)
    const dispatch=useDispatch()


    const Playlist = props.location.state.props.playlist.id
    const current = []

    props.location.state.props.playlist.songsId.map((songsId)=>{
        current.push(songsId)
    })


    function addsong(){
        const newSong =[...new Set(current)]
        dispatch({type: "ADD_SONG_TO_PLAYLIST", payload: {Playlist, newSong}})
        props.history.push('/playlist')
    }

    function appendSong(songsId){
        if(!flag){
                current.pop(songsId)
            }

        else{
                current.push(songsId)
        }
    }


    return(
        <div>
            Click on Songs to Select or Deselect
            {
                Songs.map((song)=>{
                    return(
                        <div>
                            <p>{song.title}</p>
                            <button onClick={()=>{setFlag(true); appendSong(song.id) }} ></button>
                            <button onClick={()=>{setFlag(false); appendSong(song.id) }} >Remove</button>
                        </div>
                    )          
                })
            }
            <button onClick={addsong}>Submit</button>    
        </div>
    )
}

export default AddToPlaylistForm;


