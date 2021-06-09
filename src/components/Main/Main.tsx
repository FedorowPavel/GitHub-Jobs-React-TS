import styled from 'styled-components'
import React from 'react'
import Jobs from './ListOfJobs'

const Main = styled.main`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  //flex-basis: 65%;
  

  @media screen and (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    //flex-basis: 100%;
    //margin-right: 0;
  }
`

export default () => (
  <Main>
    <Jobs />
  </Main>

)
