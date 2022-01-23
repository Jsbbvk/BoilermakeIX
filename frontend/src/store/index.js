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
<<<<<<< HEAD
  removeCourseFromSemesters,
=======
  setSemesters,
>>>>>>> 132d01c7364c7987cd267e240e786246405c0f24
} from './reducers/semester'

export { addTrack, removeTrack, setTracks } from './reducers/tracks'
