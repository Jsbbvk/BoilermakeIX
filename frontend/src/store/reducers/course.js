import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  previousCourses: [],
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      if (
        state.previousCourses.find(
          (c) => c?.subject === action.payload?.subject && c?.number === action.payload?.number
        )
      )
        return

      state.previousCourses.push(action.payload)
    },
    removeCourse: (state, action) => {
      const {
        payload: { subject, number },
      } = action
      state.previousCourses = state.previousCourses.filter(
        ({ subject: _subject, number: _number }) => !(subject === _subject && number === _number)
      )
    },
    setCourse: (state, action) => {
      state.previousCourses = action.payload
    },
  },
})

export const { addCourse, removeCourse, setCourse } = courseSlice.actions

export default courseSlice.reducer
