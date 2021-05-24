import styled from 'styled-components'
import React from 'react'
import Checkbox from '../UI/Checkbox'
import Title from './Title'
import InputSearch from '../UI/InputSearch'
import RadioInputs from './RadioInput'

const Aside = styled.aside`
  padding-top: 12px;
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  @media screen and (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`

export default () => (
  <Aside>
    <Checkbox />
    <Title text="Location" />
    <InputSearch type="text" placeholder="City, state, zip code or country" />
    <RadioInputs name="cities" />
  </Aside>
)
