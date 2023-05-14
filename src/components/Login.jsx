import React from 'react'
import { Container, LoginBtn } from '../style/styleLogin'
import logo from '../images/SpotifyLogo.png'

const Login = () => {

    const endpoint = 'https://accounts.spotify.com/authorize';
    const clientID = '81bde7e40b454816a65695e478b9e39b';
    const redirectUri = 'https://localhost:3000/';
    const scopes = ['user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-state',
        'user-top-read',
        'user-modify-playback-state'];

    // URL with all its parameters to access the app
    const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&show_dialog=true`;


    return (
        <Container>
            <img src={logo} alt='Spotify'/>
            <LoginBtn href={loginURL}>Login with Spotify</LoginBtn>
        </Container>
    )
}

export default Login