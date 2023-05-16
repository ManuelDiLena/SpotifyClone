import styled from 'styled-components'

const SidebarContainer = styled.div`
    flex: 0.2;
    height: 100vh;
    background-color: #212121;
    border: 6px solid #121212;
    min-width: 240px;
    color: #b3b3b3;
    & img {
        height: 60px;
        padding: 10px;
        margin-left: 10px;
        margin-right: auto;
    }
    & hr {
        border: 6px solid #121212;
    }
`

const Playlists = styled.div`
    margin: 10px 10px;
    color: #ffffff;
`

const Options = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    trassition: 300ms color ease-in;
    &:hover {
        color: #ffffff;
    }
    & h2 {
        padding: 10px 5px;
    }
    & h4 {
        width: 60%;
        margin: 2px 0 2px 20px;
        color: #ffffff;
        background-color: #535353;
        padding: 5px 10px;
        border-radius: 70px;
    }
`

export { SidebarContainer, Playlists, Options }