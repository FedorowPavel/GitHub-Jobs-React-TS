import styled from 'styled-components'
import React from 'react'
import ListOfJobs from './ListOfJobs'

const Main = styled.main`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  

  @media screen and (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`

export default () => (
  <Main>
    <ListOfJobs />
  </Main>

)
