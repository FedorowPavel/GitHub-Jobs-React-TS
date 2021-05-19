import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 32px;
  grid-row-gap: 54px;
  
  & header {
    grid-column: 1 / 3;
    grid-row: 1 / 2 ;
  }
  
  & aside {
    border: 1px solid red;
    grid-column: 1 / 2;
    grid-row: 2 / 3 ;
  }
  
  & main {
    border: 1px solid red;
    grid-column: 2 / 3;
    grid-row: 2 / 3 ;
  }
  
  & footer {
    height: 100px;
    border: 1px solid red;
    grid-column: 1 / 3;
    grid-row: 3 / 4 ;
  }
  
`

export default Wrapper
