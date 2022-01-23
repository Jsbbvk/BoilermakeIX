import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  previousCourses: [],
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      const { course } = action.payload
      if (
        !state.previousCourses.find(
          (c) => c?.subject === course.subject && c?.number === course.number
        )
      )
        state.previousCourses.push(course)
    },
    removeCourse: (state, action) => {
      const { course } = action.payload
      state.previousCourses = state.previousCourses.filter(
        ({ subject: _subject, number: _number }) =>
          !(course.subject === _subject && course.number === _number)
      )
    },
    removeCourses: (state, action) => {
      const { coursesToRemove } = action.payload
      state.previousCourses = state.previousCourses.filter(
        (c) => !coursesToRemove.find((_c) => c.subject === _c.subject && c.number === _c.number)
      )
    },
    setCourse: (state, action) => {
      state.previousCourses = action.payload.courses
    },
  },
})

export const { addCourse, removeCourse, setCourse, removeCourses } = courseSlice.actions

export default courseSlice.reducer
