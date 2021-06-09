import styled from 'styled-components'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { jobsActions } from '../../store/jobsSlice'
import { useDebouncedEffect } from '../../custom-hooks/useDebounce'

const InputStyled = styled.input`
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

const InputSearch: React.FC<{type: string, placeholder: string}> = (props) => {
  const { type, placeholder } = props

  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  useDebouncedEffect(
    () => dispatch(jobsActions.fetchJobs({ location: `location=${value}` })),
    [value],
    300
  )

  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      onChange={(e) => setValue(e.currentTarget.value)}
      value={value}
    />
  )
}

export default InputSearch
