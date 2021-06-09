import React, { useState } from 'react'

import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Button from '../UI/Button'
import { jobsActions } from '../../store/jobsSlice'
// import InputSearch from '../UI/InputSearch'

const FormStyled = styled.form`
  width: 65%;
  position: relative;
`

const InputSearchStyled = styled.input`
  height: 56px;
  border-radius: 4px;
  padding-right: -160px;
  border: 2px solid white;
  width: 100%;
  padding-left: 18px;
  font-size: 14px;

  &::placeholder {
    color:${(props) => props.theme.infoFontColor}
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.primaryColor};
  }
`

const HeaderSearchForm: React.FC = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(jobsActions.fetchJobs({ description: `description=${value}` }))
    setValue('')
  }

  return (
    <FormStyled onSubmit={onSubmitHandler}>
      <InputSearchStyled
        type="text"
        placeholder="Title, companies, expertise or benefits"
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
      <Button type="submit">Search</Button>
    </FormStyled>
  )
}

export default HeaderSearchForm
