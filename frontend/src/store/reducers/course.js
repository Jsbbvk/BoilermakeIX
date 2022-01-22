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
    setCourses: (state, action) => {
      state.previousCourses = action.payload
    },
    showCourseInfo: (state, action) => {
      state.showCourseInfo = action.payload
    },
    selectCourse: (state, action) => {
      state.courseSelected = action.payload
    },
  },
})

export const { setCourses, showCourseInfo, selectCourse } = courseSlice.actions

export default courseSlice.reducer
