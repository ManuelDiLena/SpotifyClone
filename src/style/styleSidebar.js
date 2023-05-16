import styled from 'styled-components'

const SidebarContainer = styled.div`
    flex: 0.2;
    height: 100vh;
    background-color: #212121;
    border: 4px solid #121212;
    min-width: 240px;
    color: #b3b3b3;
    & img {
        height: 60px;
        padding: 10px;
        margin-left: 10px;
        margin-right: auto;
    }
    & hr {
        border: 4px solid #121212;
    }
`

const Playlists = styled.div`
    margin: 5px 10px;
`

export { SidebarContainer, Playlists }