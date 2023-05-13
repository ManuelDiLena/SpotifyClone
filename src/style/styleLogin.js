import styled from 'styled-components'

const Container = styled.div `
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #121212;
    & img {
        width: 100%;
    }
`

const LoginBtn = styled.a `
    padding: 20px;
    background-color: #1db954;
    border-radius: 80px;
    color: #121212;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bolder;
`

export { Container, LoginBtn }