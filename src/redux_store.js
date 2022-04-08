import { combineReducers } from "redux";

const userInitializer = []
const songInitializer = []
const playlistInitializer = []

const keyInitializer = [
    {
        "key" : "song"
    }
]

const keyReducer = (state=keyInitializer, action)=>{
    switch(action.type){
        case "KEY_UPDATE":
            state.map(key=>key.key=action.payload)
            return state
        
        default:
            return state
    }
}

const userReducer=(state=userInitializer, action)=>{
    switch(action.type){
        case "PROFILE":
            state = [...state, action.payload]
            return state
        
        case "LOGOUT":
            state = []
            return state
        
        default:
            return state
    }
}

const songReducer = (state=songInitializer, action)=>{
    switch(action.type){
        case "SONGS":
            action.payload.map((song)=>{
                state = [...state, song]
            })
            return state

        case "ADD_SONG":
            state = [...state, action.payload]
            return state

        case "EDIT_SONG":
            state = [...state]
            state.map((song)=>{
                if(song.id==action.payload.id){
                    song.movie = action.payload.movie
                }
            })
            return state

        case "DELETE_SONG":
            state = state.filter((song)=>{
                if(song.id != action.payload){
                    return song
                }
            })
            return state
        
        default:
            return state
    }
}

const playlistReducer = (state=playlistInitializer, action)=>{
    switch(action.type){
        case "PLAYLIST":
            action.payload.map((playlist)=>{
                state = [...state, playlist]
            })
            return state
        
        case "ADD_PLAYLIST":
            state = [...state, action.payload]
            return state

        case "ADD_SONG_TO_PLAYLIST":
            state = [...state]
            state.map((playlist)=>{
                if(playlist.id==action.payload.Playlist){
                    playlist.songId = action.payload.newSong
                }
            })
            return state
        
        case "REMOVE_SONG":
            state.map((playlist)=>{
                if(action.payload.playlist == playlist.id){
                    playlist.songId = playlist.songId.filter((song)=>{
                        return song != action.payload.songID
                    })
                }
            })
            return state

        default:
            return state
    }
}


export default combineReducers({
    keyReducer,
    userReducer,
    songReducer,
    playlistReducer
})