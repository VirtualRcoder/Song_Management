import {Route} from 'react-router-dom';

import Song from './Song'

function Home(){
    return(
        <div>
            <Route exact path="/" component={Song}/> 
        </div>
    )
}

export default Home