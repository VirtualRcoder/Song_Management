import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    fetch('http://localhost:3001/Playlists')
    .then(res=>res.json())
    .then(res=>{
      dispatch({type: "PLAYLIST", payload: res})
    })
    
    fetch('http://localhost:3001/Songs')
    .then(res=>res.json())
    .then(res=>{
      dispatch({type: "SONGS", payload: res})
    })
  },[])

  return (
    <div>
      <Router>
        <NavBar/>
        <br/>
        <br/>
        <br/>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
