export const courseEquals = (course1, course2) =>
  course1.subject === course2.subject && course1.number.toString() === course2.number.toString()

// TODO: concurrent courses and corequisites
function rec(obj, prevCourses) {
  if (obj.type === 'and') {
    return !obj.value.some(
      (value) =>
        (value.type === 'course' &&
          prevCourses.find((c) => courseEquals(c, value.value)) === undefined) ||
        (value.type !== 'course' && !rec(value, prevCourses))
    )
  }
  if (obj.type === 'or') {
    return obj.value.some(
      (value) =>
        (value.type === 'course' &&
          prevCourses.find((c) => courseEquals(c, value.value)) !== undefined) ||
        (value.type !== 'course' && rec(value, prevCourses))
    )
  }
}

export const checkPrereqs = (course, prevCourses) => rec(course.prereqs, prevCourses)

export const hasTaken = (course, prevCourses) =>
  prevCourses.find((c) => courseEquals(c, course)) !== undefined
