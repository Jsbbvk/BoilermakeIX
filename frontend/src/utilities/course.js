export const courseEquals = (course1, course2) =>
  course1.subject === course2.subject && course1.number.toString() === course2.number.toString()

export const hasTaken = (course, prevCourses) =>
  prevCourses.find((c) => courseEquals(c, course)) !== undefined

export const courseExist = ({ type, value }, prevCourses, currentSemester) => {
  if (type === 'and') {
    return value.every(
      (_value) =>
        (_value.type === 'course' && hasTaken(_value.value, prevCourses)) ||
        (_value.type !== 'course' && courseExist(_value, prevCourses) && _value.type) ||
        (_value.type === 'course_corequiste' &&
          currentSemester.courses.find((c) => courseEquals(c, _value.value))) ||
        (_value.type === 'course_concurrent' &&
          (hasTaken(_value.value, prevCourses) ||
            currentSemester.courses.find((c) => courseEquals(c, _value.value))))
    )
  }
  if (type === 'or') {
    return value.some(
      (_value) =>
        (_value.type === 'course' && hasTaken(_value.value, prevCourses)) ||
        (_value.type !== 'course' && courseExist(_value, prevCourses)) ||
        (_value.type === 'course_corequiste' &&
          currentSemester.courses.find((c) => courseEquals(c, _value.value))) ||
        (_value.type === 'course_concurrent' &&
          (hasTaken(_value.value, prevCourses) ||
            currentSemester.courses.find((c) => courseEquals(c, _value.value))))
    )
  }
}

export const getAllCourses = ({ type, value }) => {
  if (type === 'and' || type === 'or') {
    return value.flatMap((obj) => getAllCourses(obj))
  }

  if (type === 'course') return [value]
  return null
}

export const coursesInList = ({ type, value }, list) => {
  if (list.length === 0) return []
  // console.log('courseList')
  if (type === 'and' || type === 'or') {
    return value.flatMap((obj) => coursesInList(obj, list))
  }

  if (type === 'course') return list.find((c) => courseEquals(c, value)) ? [value] : []
}

export const getPercentageOfCompletion = ({ type, value, pick = 1 }, list, percentage) => {
  if (list.length === 0) return 0

  if (type === 'course') return list.find((c) => courseEquals(c, value)) ? percentage : 0

  if (type === 'and') {
    const numLength = value.reduce((p, c) => p + (c.pick || 1), 0)
    return Math.min(
      percentage,
      value.reduce(
        (prev, curr) =>
          prev + getPercentageOfCompletion(curr, list, Math.round(percentage / numLength)),
        0
      )
    )
  }
  if (type === 'or')
    return Math.min(
      percentage,
      value.reduce(
        (prev, curr) =>
          Math.max(prev, getPercentageOfCompletion(curr, list, Math.round(percentage / pick))),
        0
      )
    )

  return 0
}

export const checkPrereqs = (course, prevCourses, currentSemester) =>
  courseExist(course.prereqs, prevCourses, currentSemester)
