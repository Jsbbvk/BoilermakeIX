import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tracks: [],
}

export const tracksSlice = createSlice({
  name: 'tracks',
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
  },
})

export const { addTrack } = tracksSlice.actions

export default tracksSlice.reducer
