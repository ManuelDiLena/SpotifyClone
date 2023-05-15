import React from 'react'
import { SidebarContainer } from '../style/styleSidebar'
import logo from '../images/GreenLogo.png'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <img src={logo} alt='logo'/>
        </SidebarContainer>
    )
}

export default Sidebar