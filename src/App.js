import { useEffect, useState } from 'react';
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import { getTokenFromURL } from './SpotifyLogic';

function App() {

    const [token, setToken] = useState('')
    
    useEffect(() => {
        const hash = getTokenFromURL();
        //window.location.hash = "";
        const _token = hash.access_token;
        setToken(_token);
        console.log('token: ' + _token);
    }, [])

    return (
        <div>
            {
               token ? <Home /> : <Login />
            }
        </div>
    );
}

export default App;
