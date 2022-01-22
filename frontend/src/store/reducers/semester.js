import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  semesters: [],
}

export const semestersSlice = createSlice({
  name: 'semesters',
  initialState,
  reducers: {
    pushSemester: (state, action) => {
      state.semesters.push({
        index: state.semesters.length(),
        title: action.payload,
      })
    },
    insertSemester: (state, action) => {
      state.semesters.splice(action.payload.index, 0, {
        index: action.payload.index,
        title: action.payload.title,
      })
    },
    removeSemester: (state, action) => {
      state.semesters.splice(action.paylod, 1)
    },
  },
})

export const { pushSemester, insertSemester, removeSemester } = semestersSlice.actions

export default semestersSlice.reducer
