import styled from 'styled-components'

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    height: 80px;
    width: 100vw;
    background-color: #121212;
    color: #b3b3b3;
    display: flex;
    justify-content: space-between;
    padding: 2px 8px 0 8px;
`

const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    & img {
        height: 60px;
        width: 60px;
        margin-left: 15px;
        margin-right: 15px;
        object-fit: contain;
        border-radius: 5px;
    }
`

const FooterCenter = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 300px;
    cursor: pointer;
`

const FooterRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 35px;
    cursor: pointer;
    & .MuiSlider-root {
        color: #b3b3b3;
    }
`

export { FooterContainer, FooterLeft, FooterRight, FooterCenter }