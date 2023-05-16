import React from 'react'

export const SidebarOptions = ({title, Icon}) => {
    return (
        <h2>
            <Icon/><span>{title}</span>
        </h2>
    )
}

export default SidebarOptions