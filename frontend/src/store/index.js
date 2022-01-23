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

export { addCourse, removeCourse, setCourse, removeCourses } from './reducers/course'
export {
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
} from './reducers/semester'

export { addTrack, removeTrack, setTracks } from './reducers/tracks'
