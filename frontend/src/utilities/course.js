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

export const checkPrereqs = (course, prevCourses) => courseExist(course.prereqs, prevCourses)

export const hasTaken = (course, prevCourses) =>
  prevCourses.find((c) => courseEquals(c, course)) !== undefined
