import {Route} from 'react-router-dom';

import Song from './Song';
import PlaylistPage from './PlaylistPage';

import Authentication from '../Authentication/Authentication';
import Register from '../Authentication/Register';

import AddSongForm from '../Form/AddSongForm';
import AddToPlaylistForm from '../Form/AddToPlaylistForm';

function Home(){
    return(
        <div>
            <Route exact path="/login" component={Authentication}/>
            <Route exact path="/register" component={Register}/>

            <Route exact path="/" component={Song}/>
            <Route exact path="/playlist" component={PlaylistPage}/>

            <Route exact path="/addSongForm" component={AddSongForm}/>
            <Route exact path="/addSongToPlaylist" component={AddToPlaylistForm}/> 
        </div>
    )
}

export default Home