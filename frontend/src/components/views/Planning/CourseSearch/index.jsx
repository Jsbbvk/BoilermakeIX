import { Autocomplete, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import COURSES from '../../../../constants/allcourses.json'
import UserContext from '../../../../userContext'

const COURSE_NAMES = COURSES.map((course) => `${course.course_id}: ${course.title}`)

function CourseSearch() {
  const { setShow, setCourse } = useContext(UserContext)
  const [courseValue, setCourseValue] = useState(null)
  const [courseInputValue, setCourseInputValue] = useState('')

  const onCourseChange = (_, course, details) => {
    if (details !== 'selectOption') return

    setCourseInputValue('')
    setCourseValue(null)
    setShow(true)
    setCourse({
      subject: course.split(' ')[0],
      number: parseInt(course.split(' ')[1].slice(0, -1)),
    })
  }

  return (
    <Autocomplete
      disablePortal
      blurOnSelect
      value={courseValue}
      inputValue={courseInputValue}
      onInputChange={(_, course) => setCourseInputValue(course || '')}
      options={COURSE_NAMES}
      onChange={onCourseChange}
      ListboxProps={{
        sx: {
          '& > li': {
            whiteSpace: 'nowrap !important',
            overflow: 'hidden !important',
            textOverflow: 'ellipsis !important',
            display: 'block !important',
            textAlign: 'left !important',
          },
        },
      }}
      sx={{
        width: '500px',
        maxWidth: '90vw',
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          autoComplete="off"
          label="Search for additional courses"
          variant="standard"
        />
      )}
    />
  )
}

export default CourseSearch
