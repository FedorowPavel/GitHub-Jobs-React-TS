import React from 'react'
import { useDispatch } from 'react-redux'
import { jobsActions } from '../../store/jobsSlice'

const RadioItem: React.FC<{city: string, name: string}> = (props) => {
  const { city, name } = props
  const dispatch = useDispatch()

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    console.log('radio input')
    dispatch(jobsActions.fetchJobs({ location: `location=${e.currentTarget.value}` }))
  }
  return (
    <label htmlFor={city}>
      <input
        id={city}
        value={city}
        name={name}
        type="radio"
        onChange={onChangeHandler}
      />
      <span>{city}</span>
    </label>
  )
}

export default RadioItem
