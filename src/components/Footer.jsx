import React from 'react'
import { FooterContainer, FooterLeft, FooterCenter, FooterRight } from '../style/styleFooter'
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded'
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded'
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded'
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded'
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded'
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded'
import album from '../images/album.jpg'
import { Grid, Slider } from '@material-ui/core'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                <img src={album} alt='cover'/>
                <div>
                    <h4 className='name-song'>The Scientist</h4>
                    <p>Coldplay</p>
                </div>
            </FooterLeft>
            <FooterCenter>
                <ShuffleRoundedIcon style={{ fontSize: 25 }} className='shuffle' />
                <SkipPreviousRoundedIcon style={{ fontSize: 50 }} className='icon' />
                <PlayCircleFilledRoundedIcon style={{ fontSize: 60 }} className='icon-play white' />
                <SkipNextRoundedIcon style={{ fontSize: 50 }} className='icon' />
                <RepeatRoundedIcon style={{ fontSize: 25 }} className='repeat' />
            </FooterCenter>
            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item><PlaylistAddRoundedIcon style={{ fontSize: 25 }} /></Grid>
                    <Grid item><VolumeUpRoundedIcon style={{ fontSize: 25 }} /></Grid>
                    <Grid item xs><Slider /></Grid>
                </Grid>
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer