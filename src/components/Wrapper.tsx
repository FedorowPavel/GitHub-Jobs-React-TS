import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  color: ${(props) => props.theme.primaryTextColor};
  
  display: grid;
  grid-template-columns: 3.5fr 6.5fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 32px;
  //display: flex;
  //flex-wrap: wrap;
  //align-content: space-between;
  
  
  @media screen and (max-width: 800px) {
    grid-gap: 0;
    padding: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
  }
`

export default Wrapper
