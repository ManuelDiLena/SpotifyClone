import { createSlice } from '@reduxjs/toolkit'

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState: {
        playlist: null,
    },
    reducers: {
        setPlaylist: (state, actions) => {
            state.playlist = actions.payload
        }
    }
})

export const { setPlaylist } = playlistSlice.actions

export const selectPlaylist = state => state.playlist.playlist 

export default playlistSlice.reducer