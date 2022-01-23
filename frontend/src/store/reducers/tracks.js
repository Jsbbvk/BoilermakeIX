import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tracks: [],
}

export const tracksSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    addTrack: (state, action) => {
      state.tracks.push(action.payload)
    },
    removeTrack: (state, action) => {
      state.tracks.splice(
        state.tracks.find((track) => track.title === action.title),
        1
      )
    },
    setTracks: (state, action) => {
      state.tracks = action.payload
    },
  },
})

export const { addTrack, removeTrack, setTracks } = tracksSlice.actions

export default tracksSlice.reducer
