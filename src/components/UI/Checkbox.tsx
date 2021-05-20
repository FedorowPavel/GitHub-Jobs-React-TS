import styled, { StyledComponent, MyTheme } from 'styled-components'
import React from 'react'

const StyledCheckbox: StyledComponent<'div', { theme: MyTheme }> = styled.div`
  padding: 6px;
  
  
  & input {
    display: none;
    
    &:checked + span:before {
      background: ${(props) => props.theme.primaryColor};
    }
  }
  
  & span {
    font-size: ${(props) => props.theme.primaryFontSize};
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    &:before {
      display: block;
      content: ' ';
      margin-right: 6px;
      width: 18px;
      height: 18px;
      border-radius: 2px;
      border: 1px solid #B9BDCF;
      transition: 0.2s ease;
    }
  }
`

const Checkbox: React.FC = () => (
  <StyledCheckbox>
    <label htmlFor="city">
      <input id="city" name="city" type="checkbox" />
      <span>Full time</span>
    </label>
  </StyledCheckbox>
)
export default Checkbox
