import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  previousCourses: [],
}

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.previousCourses = action.payload
    },
  },
})

export const { setCourses } = courseSlice.actions

export default courseSlice.reducer
