export const courseEquals = (course1, course2) =>
  course1.subject === course2.subject && course1.number.toString() === course2.number.toString()

// TODO: concurrent courses and corequisites
export const courseExist = ({ type, value }, prevCourses) => {
  if (type === 'and') {
    return value.every(
      (_value) =>
        _value.type === 'course' &&
        prevCourses.find((c) => courseEquals(c, _value.value)) &&
        _value.type !== 'course' &&
        courseExist(_value, prevCourses)
    )
  }
  if (type === 'or') {
    return value.some(
      (_value) =>
        (_value.type === 'course' && prevCourses.find((c) => courseEquals(c, _value.value))) ||
        (_value.type !== 'course' && courseExist(_value, prevCourses))
    )
  }
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
  // console.log('percentage')
  if (type === 'course') return list.find((c) => courseEquals(c, value)) ? percentage : 0

  const singlePercentage =
    type === 'and' ? Math.round(percentage / value.length) : Math.round(percentage / pick)

  return Math.min(
    percentage,
    value.reduce((prev, curr) => prev + getPercentageOfCompletion(curr, list, singlePercentage), 0)
  )
}

export const checkPrereqs = (course, prevCourses) => courseExist(course.prereqs, prevCourses)

export const hasTaken = (course, prevCourses) =>
  prevCourses.find((c) => courseEquals(c, course)) !== undefined
