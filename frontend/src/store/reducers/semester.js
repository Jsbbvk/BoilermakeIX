import { createSlice } from '@reduxjs/toolkit'
import { courseEquals } from '../../utilities'

const initialState = {
  // NOTE: semesters shud be format { index: int, title: str, courses: [{ subject, number }] }
  semesters: [],
  lastSemester: null,
  currentSemester: null,
}

export const semestersSlice = createSlice({
  name: 'semester',
  initialState,
  reducers: {
    setCurrentSemester: (state, action) => {
      state.currentSemester = action.payload
    },
    pushSemester: (state, action) => {
      let newTitle = action.payload
      if (state.semesters.find((semester) => semester.title === action.payload)) {
        newTitle += ' (copy)'
      }
      state.semesters.push({
        index: state.semesters.length,
        title: newTitle,
        courses: [],
      })
      state.lastSemester = state.semesters[state.semesters.length - 1]
      state.currentSemester = state.semesters[state.semesters.length - 1]
    },
    insertSemester: (state, action) => {
      let { title } = action.payload
      if (state.semesters.find((semester) => semester.title === title)) {
        title += ' (copy)'
      }
      state.semesters.splice(action.payload.index, 0, {
        index: action.payload.index,
        title,
        courses: [],
      })
      state.lastSemester = state.semesters[state.semesters.length - 1]
    },
    popSemester: (state) => {
      state.semesters.pop()
      state.lastSemester =
        state.semesters.length === 0 ? null : state.semesters[state.semesters.length - 1]
    },
    removeSemester: (state, action) => {
      state.semesters.splice(action.payload, 1)
      state.lastSemester =
        state.semesters.length === 0 ? null : state.semesters[state.semesters.length - 1]
    },
    renameSemester: (state, action) => {
      state.semesters[
        state.semesters.findIndex((semester) => semester.title === action.payload.title)
      ].title = action.payload.newTitle
    },
    addCourseToSemester: (state, action) => {
      // pass in { semesterTitle, courseObj }
      state.semesters[
        state.semesters.findIndex((sem) => sem.title === action.payload.semesterTitle)
      ].courses.push(action.payload.course)
    },
    removeCourseFromSemester: (state, action) => {
      // pass in { semesterTitle, courseObj }
      const i = state.semesters.findIndex((sem) => sem.title === action.payload.semesterTitle)
      state.semesters[i].courses = state.semesters[i].courses.filter(
        (course) => !courseEquals(course, action.payload.course)
      )
    },
    removeCourseFromSemesters: (state, action) => {
      const idx = state.semesters.findIndex((sem) =>
        sem.courses.find((c) => courseEquals(c, action.payload))
      )
      state.semesters[idx].courses = state.semesters[idx].courses.filter(
        (c) => !courseEquals(c, action.payload)
      )
    },
    setSemesters: (state, action) => {
      state.semesters = action.payload
      state.lastSemester =
        state.semesters.length === 0 ? null : state.semesters[state.semesters.length - 1]
      state.currentSemester = state.lastSemester
    },
  },
})

export const {
  pushSemester,
  insertSemester,
  removeSemester,
  popSemester,
  renameSemester,
  addCourseToSemester,
  removeCourseFromSemester,
  setCurrentSemester,
  removeCourseFromSemesters,
  setSemesters,
} = semestersSlice.actions

export default semestersSlice.reducer
