import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './reducers/course'

export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
})

export { setCourses } from './reducers/course'
