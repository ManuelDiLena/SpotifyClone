import React from 'react'
import { Options } from '../style/styleSidebar'

export const SidebarOptions = ({title, Icon}) => {
    return (
        <Options>
            { Icon && <Icon /> }
            { Icon ? <h2>{title}</h2> : <h4>{title}</h4> } 
        </Options>
    )
}

export default SidebarOptions