import { useEffect } from 'react';
import { useDispatch, useSelector } from'react-redux';
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import { getTokenFromURL } from './SpotifyLogic';
import { setUser } from './features/UserSlice';
import { selectToken } from './features/TokenSlice';
import { selectUser } from './features/UserSlice';
import SpotifyWebApi from'spotify-web-api-js';
import { setToken } from './features/TokenSlice';
import { setPlaylist } from './features/PlaylistSlice';

const spotify = new SpotifyWebApi()

function App() {

    const token = useSelector(selectToken)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        const hash = getTokenFromURL();
        //window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            dispatch(setToken(_token))
            spotify.setAccessToken(_token);
            spotify.getMe().then(user => dispatch(setUser(user)))
            console.log('token: ' + token);
            spotify.getPlaylist('3tyhpJx378PMOmz8xL3NXR').then(playlist => dispatch(setPlaylist(playlist)))
        }

    }, [dispatch])

    return (
        <div>
            {
               user ? <Home /> : <Login />
            }
        </div>
    );
}

export default App;
