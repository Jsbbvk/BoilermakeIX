import { v4 as uuidv4 } from 'uuid'
import {
  Box,
  Typography,
  Chip,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
  Stack,
  CircularProgress,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { connect, useSelector } from 'react-redux'
import { memo, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  getPercentageOfCompletion,
  coursesInList,
  courseExist,
  getAllCourses,
} from '../../../../utilities'
import UserContext from '../../../../userContext'

const StyledChip = styled(Chip)({
  margin: 6,
  cursor: 'pointer',
  maxWidth: 300,
})

const HSL_FACTOR = 5

const Course = memo(({ depth = 1, type, pick = 1, value, displayType, title, curriculum }) => {
  const getCourses = useCallback(() => {
    if (depth !== 2) return null

    return getAllCourses({ type, value })
  }, [depth, value, type])

  if (depth > 4) {
    return null
  }

  return (
    <Accordion
      p={1.5}
      sx={{
        backgroundColor: `hsla(0, 0%, ${7 + depth * HSL_FACTOR}%, 1)`,
        mt: depth > 1 ? 1 : 0,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography>
            <b>{displayType?.toUpperCase()}</b> {displayType ? 'p' : 'P'}ick{' '}
            {type === 'and' ? 'all' : pick} {`course${type === 'and' || pick > 1 ? 's' : ''}`}
            {depth === 1 || !title ? (
              ''
            ) : (
              <span>
                {' '}
                from <b>{title}</b>
              </span>
            )}
          </Typography>
          {depth !== 1 && title && (
            <PercentageDisplay
              value={{ type, value, pick }}
              depth={depth}
              curriculum={curriculum}
              courseList={getCourses()}
            />
          )}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        {value.map(({ type: _type, value: _value, pick: _pick, title: _title }, i) => {
          if (_type === 'course') {
            return (
              <CourseChip
                key={`${depth}-${_value.subject}-${_value.number}-${uuidv4()}`}
                val={_value}
                d={depth}
              />
            )
          }
          if (_type === 'and' || _type === 'or') {
            return (
              <Course
                key={`${depth + 1}-${_type}-${_pick}-${uuidv4()}`}
                depth={depth + 1}
                type={_type}
                value={_value}
                pick={_pick}
                title={_title}
                displayType={i === 0 ? undefined : type}
                curriculum={depth === 1 ? title : curriculum}
              />
            )
          }

          return null
        })}
      </AccordionDetails>
    </Accordion>
  )
})

const mapStateToProps = (state) => ({
  previousCourses: state.course.previousCourses,
})

const PercentageDisplay = connect(mapStateToProps)(
  memo(
    ({ previousCourses, value, depth, curriculum, courseList }) => {
      const [percent, setPercent] = useState(0)

      const getPercentage = useCallback((v, p) => getPercentageOfCompletion(v, p, 100), [])

      useEffect(() => {
        const pValue = getPercentage(value, previousCourses)
        setPercent(pValue)
      }, [value, previousCourses, getPercentage, curriculum])

      return (
        <Box
          sx={{
            width: '75px',
            color: () => {
              if (percent < 50) return '#d32f2f'
              if (percent < 100) return '#fbc02d'
              return '#66bb6a'
            },
          }}
        >
          <LinearProgress variant="determinate" value={percent} color="inherit" />
        </Box>
      )
    },
    (prev, next) => {
      const diff = prev?.previousCourses
        .filter(
          (pC) =>
            !next?.previousCourses.find(
              (nC) => pC.subject === nC.subject && pC.number === nC.number
            )
        )
        .concat(
          next?.previousCourses.filter(
            (pC) =>
              !prev?.previousCourses.find(
                (nC) => pC.subject === nC.subject && pC.number === nC.number
              )
          )
        )

      if (!diff || !diff.length) return true

      const res = !diff.some((course) =>
        next?.courseList.find((c) => c.subject === course.subject && c.number === course.number)
      )
      return res
    }
  )
)

const CourseChip = connect(mapStateToProps)(
  memo(
    ({ val, d, previousCourses }) => {
      const { setShow, setCourse } = useContext(UserContext)

      const handleClick = (subject, number) => {
        setShow(true)
        setCourse({ subject, number })
      }

      const findCourse = ({ subject, number }) =>
        previousCourses?.some(
          ({ subject: _subject, number: _number }) => subject === _subject && number === _number
        )

      return (
        <StyledChip
          label={`${val.subject} ${val.number}${val.title ? `: ${val.title}` : ''}`}
          onClickCapture={() => handleClick(val.subject, val.number)}
          sx={{
            backgroundColor: findCourse(val)
              ? '#2e7d32'
              : `hsla(0, 0%, ${7.5 + d * HSL_FACTOR}%, 1)`,
            '&:hover': {
              backgroundColor: findCourse(val)
                ? '#388e3c'
                : `hsla(0, 0%, ${3 + d * HSL_FACTOR}%, 1)`,
            },
          }}
        />
      )
    },
    (prev, next) => {
      const existsInPrev = !!prev?.previousCourses?.find(
        ({ subject: _subject, number: _number }) =>
          prev?.val?.subject === _subject && prev?.val?.number === _number
      )

      const existsInNext = !!next?.previousCourses?.find(
        ({ subject: _subject, number: _number }) =>
          next?.val?.subject === _subject && next?.val?.number === _number
      )

      return existsInNext === existsInPrev
    }
  )
)

export default Course
