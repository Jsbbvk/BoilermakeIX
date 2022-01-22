import { useMemo, useState } from 'react'
import UserContext from '../userContext'

function UserProvider({ children }) {
  const [showCourseInfo, setShow] = useState()
  const [courseInfo, setCourse] = useState()

  const value = useMemo(
    () => ({
      showCourseInfo,
      courseInfo,
      setShow,
      setCourse,
    }),
    [showCourseInfo, courseInfo]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
