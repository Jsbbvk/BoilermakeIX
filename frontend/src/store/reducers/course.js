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
    removeCourses: (state, action) => {
      const { coursesToRemove } = action.payload
      state.previousCourses = state.previousCourses.filter(
        (c) => !coursesToRemove.find((_c) => c.subject === _c.subject && c.number === _c.number)
      )
    },
    setCourse: (state, action) => {
      state.previousCourses = action.payload
    },
  },
})

export const { addCourse, removeCourse, setCourse, removeCourses } = courseSlice.actions

export default courseSlice.reducer
