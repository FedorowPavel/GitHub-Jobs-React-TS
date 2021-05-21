import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3.5fr 6.5fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 32px;
  color: ${(props) => props.theme.primaryTextColor};
  

  & header {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    
    
  }

  & aside {
    //border: 1px solid rgba(128, 128, 128, 0.1);
    padding-top: 12px;
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    input {
      height: 48px;
    }
  }

  & main {
    //border: 1px solid rgba(128, 128, 128, 0.1);
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    
  }

  & footer {
    //border: 1px solid rgba(128, 128, 128, 0.1);
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }

`

export default Wrapper
