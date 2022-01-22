import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './reducers/course'

export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
})

export { addCourse, removeCourse } from './reducers/course'
