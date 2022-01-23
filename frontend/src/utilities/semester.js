export const getStartingSemester = () => {
  const today = new Date()
  const month = today.getMonth()
  const year = today.getFullYear()
  return month >= 8 ? `Spring ${year + 1}` : `Fall ${year}`
}

export const getNextSemester = (currentSemester) => {
  if (currentSemester.indexOf(' ') !== -1) {
    const sem = currentSemester.substring(0, currentSemester.indexOf(' '))
    const year = parseInt(currentSemester.substring(currentSemester.indexOf(' ') + 1))
    if (!Number.isNaN(year) && (sem === 'Spring' || sem === 'Fall')) {
      return `${sem === 'Spring' ? 'Fall' : 'Spring'} ${sem === 'Spring' ? year : year + 1}`
    }
  }
  return currentSemester
}
