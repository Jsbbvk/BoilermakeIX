import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  previousCourses: [],
  showCourseInfo: false,
  courseSelected: null,
}

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, action) => {
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
  },
})

export const { addCourse, removeCourse } = courseSlice.actions

export default courseSlice.reducer
