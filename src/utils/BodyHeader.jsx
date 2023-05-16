import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from '../style/styleBody'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import { Avatar } from '@material-ui/core'

const BodyHeader = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <SearchRoundedIcon/>
                <input type='text' placeholder='Search for Artists, Songs or other' />
            </HeaderLeft>
            <HeaderRight>
                <Avatar />
                <h4>User123</h4>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default BodyHeader