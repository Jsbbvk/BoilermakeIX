// TODO: concurrent courses and corequisites
function rec(obj, coursesSoFar) {
  if (obj.type === 'and') {
    return !obj.value.some(
      (value) =>
        (value.type === 'course' &&
          coursesSoFar.find(
            (c) =>
              c.subject === value.value.subject &&
              c.number.toString() === value.value.number.toString()
          ) === undefined) ||
        (value.type !== 'course' && !rec(value, coursesSoFar))
    )
  }
  if (obj.type === 'or') {
    return obj.value.some(
      (value) =>
        (value.type === 'course' &&
          coursesSoFar.find(
            (c) =>
              c.subject === value.value.subject &&
              c.number.toString() === value.value.number.toString()
          ) !== undefined) ||
        (value.type !== 'course' && rec(value, coursesSoFar))
    )
  }
}

export const checkPrereqs = (course, coursesSoFar) => rec(course.prereqs, coursesSoFar)

export const getCourse = async (subject, number) => {
  const res = await fetch(
    `http://blanner-api.herokuapp.com/api/getcourse?subject=${subject}&number=${number}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  if (res.status !== 200) return null
  const data = await res.json()
  return data
}

export const test = async () => {
  const cs180 = await getCourse('CS', 18000)
  const cs182 = await getCourse('CS', 18200)
  const cs240 = await getCourse('CS', 24000)
  const cs242 = await getCourse('CS', 24200)
  const stat242 = await getCourse('STAT', 24200)
  const ma161 = await getCourse('MA', 16100)

  console.log(checkPrereqs(cs180, [ma161]))
}
