import styled from 'styled-components'

const BodyContainer = styled.div`
    flex: 0.8;
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

export { BodyContainer, HeaderContainer, HeaderLeft, HeaderRight }