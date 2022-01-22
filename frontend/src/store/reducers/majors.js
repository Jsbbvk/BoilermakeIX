import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  majors: [],
}

export const majorsSlice = createSlice({
  name: 'majors',
  initialState,
  reducers: {
    addMajor: (state, action) => {
      state.majors.push(action.payload)
    },
  },
})

export const { addMajors } = majorsSlice.actions

export default majorsSlice.reducer
