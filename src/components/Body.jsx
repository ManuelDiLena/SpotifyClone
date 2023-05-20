import React from 'react'
import { BodyContainer, Icons, Info, InfoText, SongsList } from '../style/styleBody'
import { useSelector } from 'react-redux'
import BodyHeader from '../utils/BodyHeader'
import { selectPlaylist } from '../features/PlaylistSlice'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded'
import SongRow from '../utils/SongRow'

const Body = () => {

    const playlist = useSelector(selectPlaylist)
    console.log('playlist: ', playlist)

    return (
        <BodyContainer>
            <BodyHeader />
            <Info>
                <img src={playlist?.images[0]?.url} alt='' />
                <InfoText>
                    <h4>Public Playlist</h4>
                    <h2>{playlist?.name}</h2>
                </InfoText>
            </Info>
            <SongsList>
                <Icons>
                    <PlayCircleFilledRoundedIcon style={{ fontSize: 60 }} className='icon-play green' />
                    <FavoriteRoundedIcon className='icon' />
                    <MoreHorizRoundedIcon className='icon' />
                </Icons>
                {
                    playlist?.tracks?.items.map((item, index) => (
                        <SongRow track={item.track} key={index} />
                    ))
                }
            </SongsList>
        </BodyContainer>
    )
}

export default Body