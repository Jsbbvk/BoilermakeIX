export const getCourse = async (subject, number) => {
  const res = await fetch(`/api/getcourse?subject=${subject}&number=${number}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (res.status !== 200) return null
  const data = await res.json()
  return data
}

// export const test = async () => {
//   const cs180 = await getCourse('CS', 18000)
//   const cs182 = await getCourse('CS', 18200)
//   const cs240 = await getCourse('CS', 24000)
//   const cs242 = await getCourse('CS', 24200)
//   const stat242 = await getCourse('STAT', 24200)
//   const ma161 = await getCourse('MA', 16100)

//   console.log(checkPrereqs(cs180, [ma161]))
// }
