import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import { SpotifyBody } from '../style/styleHome'
import Footer from './Footer'

const Home = () => {
    return (
        <>
        <SpotifyBody>
            <Sidebar />
            <Body />
        </SpotifyBody>
        <Footer />
        </>
    )
}

export default Home