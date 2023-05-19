import React from 'react'
import { Container, LoginBtn } from '../style/styleLogin'
import logo from '../images/SpotifyLogo.png'
import { loginURL } from '../SpotifyLogic'

const Login = () => {
    return (
        <Container>
            <img src={logo} alt='Spotify'/>
            <LoginBtn href={loginURL}>Login with Spotify</LoginBtn>
        </Container>
    )
}

export default Login