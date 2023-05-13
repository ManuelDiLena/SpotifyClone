import React from 'react'
import { Container, LoginBtn } from '../style/styleLogin'
import logo from '../images/SpotifyLogo.png'

const Login = () => {
  return (
    <Container>
        <img src={logo} alt='Spotify'/>
        <LoginBtn href='#'>Login with Spotify</LoginBtn>
    </Container>
  )
}

export default Login