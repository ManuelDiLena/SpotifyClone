import React from 'react'
import { SidebarContainer, Playlists } from '../style/styleSidebar'
import { SidebarOptions } from '../utils/SidebarOptions';
import logo from '../images/GreenLogo.png'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <img src={logo} alt='logo'/>
            <SidebarOptions title='Home' Icon={HomeRoundedIcon}/>
            <SidebarOptions title='Search' Icon={SearchRoundedIcon}/>
            <hr/>
            <SidebarOptions title='Your Library' Icon={QueueMusicRoundedIcon}/>
            <Playlists>Playlists</Playlists>
            <SidebarOptions title='Miami'/>
            <SidebarOptions title='Vegas'/>
            <SidebarOptions title='York'/>
        </SidebarContainer>
    )
}

export default Sidebar