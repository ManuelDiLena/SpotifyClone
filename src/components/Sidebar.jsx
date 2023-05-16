import React from 'react'
import { SidebarContainer, Playlists } from '../style/styleSidebar'
import { SidebarOptions } from '../utils/SidebarOptions'
import logo from '../images/GreenLogo.png'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <img src={logo} alt='logo'/>
            <SidebarOptions title='Home' Icon={HomeRoundedIcon}/>
            <SidebarOptions title='Search' Icon={SearchRoundedIcon}/>
            <SidebarOptions title='Your Library' Icon={QueueMusicRoundedIcon}/>
            <Playlists>Playlists</Playlists>
            <SidebarOptions title='Chillout Music'/>
            <SidebarOptions title='Hard Rock'/>
            <SidebarOptions title='Top Hits 2023'/>
        </SidebarContainer>
    )
}

export default Sidebar