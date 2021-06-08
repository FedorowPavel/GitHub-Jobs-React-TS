import React from 'react'
import styled from 'styled-components'
import RadioItem from './RadioItem.'

const cities: string[] = ['Remote', 'Amsterdam', 'New York', 'Berlin']

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
  
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    cursor: pointer;
    
    span {
      padding-left: 6px;
    }
  }
`

const RadioInputs: React.FC<{name: string}> = (props) => {
  const radioButtons = cities.map((city) => (
    <RadioItem city={city} name={props.name} key={city} />
  ))
  return (
    <StyledDiv>
      {radioButtons}
    </StyledDiv>
  )
}

export default RadioInputs
