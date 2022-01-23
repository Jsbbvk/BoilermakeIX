export const exportJson = (previousCourses, semesters, tracksSelected) => {
  const data = JSON.stringify({
    previousCourses,
    semesters,
    tracksSelected,
  })
  const file = new Blob([data], { type: 'json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(file)
  a.download = 'data.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const exportCsv = (previousCourses, semesters, tracksSelected) => {
  // const headers = ['previousCoursesSubject', 'previousCoursesNumber', 'tracksSelected']
  // semesters.forEach((semester) => {
  //   headers.push(`${semester.title}/subject`)
  //   headers.push(`${semester.title}/number`)
  // })
  let csv = 'previousCourses,'
  previousCourses.forEach((course) => {
    csv += `${course.subject},${course.number},`
  })
  csv += '\n'
  semesters.forEach((semester) => {
    csv += `${semester.title},`
    semester.courses.forEach((course) => {
      csv += `${course.subject},${course.number},`
    })
    csv += '\n'
  })
  csv += 'tracksSelected,'
  tracksSelected.forEach((track) => {
    csv += `${track},`
  })
  csv += '\n'
  const file = new Blob([csv], { type: 'csv' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(file)
  a.download = 'data.csv'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const importJson = async () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.hidden = true
  document.body.appendChild(input)
  input.click()
  console.log(input.files)
  // const data = f.text()
  // console.log(f)

  document.body.removeChild(input)
}
