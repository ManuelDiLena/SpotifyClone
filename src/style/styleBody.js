import styled from 'styled-components'

const BodyContainer = styled.div`
    flex: 0.8;
    height: 100vh;
    overflow-y: overlay;
    &::-webkit-scrollbar {
        display: none;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    background-color: #212121;
    margin: 8px;
    border-radius: 10px;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.5;
    min-width: 75px;
    color: #b3b3b3;
    padding: 10px;
    & input {
        border: none;
        width: 100%;
        font-size: 18px;
        background-color: transparent;
        color: #ffffff;
        outline: none;
    }
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    & h4 {
        margin-left: 15px;
        color: #b3b3b3;
    }
`

const Info = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    & img {
        width: 10vw;
        margin: 0 20px;
        border-radius: 5px;
        box-shadow: 0 4px 20px #000;
    }
`

const InfoText = styled.div`
    flex: 1;
    color: #ffffff;
    font-size: 20px;
    & h2 {
        margin-bottom: 10px;
    },
    & h4 {
        color: #535353;
    }
`

const SongsList = styled.div`
    margin: 20px;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    & .MuiSvgIcon-root {
        margin-right: 20px;
    }
`

const SongRowContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 0 25px;
    z-index: 90;
    color: #b3b3b3;
    &:hover {
        cursor: pointer;
        background-color: #212121;
        opacity: 0.8;
    }
    & img {
        height: 50px;
        width: 50px;
        object-fit: contain;
        border-radius: 5px;
    }
`

const SongInfo = styled.div`
    margin-left: 20px;
    & p {
        margin-top: 3px;
    }
`

export { BodyContainer, HeaderContainer, HeaderLeft, HeaderRight, Info, InfoText, SongsList, Icons, SongRowContainer, SongInfo }