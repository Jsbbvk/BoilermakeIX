export const getcourse = async (subject, number) => {
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
