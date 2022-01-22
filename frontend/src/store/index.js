import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './reducers/course'
import semesterReducer from './reducers/semester'
import trackReducer from './reducers/tracks'

export const store = configureStore({
  reducer: {
    course: courseReducer,
    semester: semesterReducer,
    track: trackReducer,
  },
})

export { setCourses, showCourseInfo, selectCourse } from './reducers/course'
export { pushSemester, insertSemester, removeSemester } from './reducers/semester'
export { addTrack, removeTrack } from './reducers/tracks'
