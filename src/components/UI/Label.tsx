import styled from 'styled-components'
import React from 'react'

const StyledLabel = styled.label``

const StyledInput = styled.input`
    display: none;

    &:checked + span:before {
      background: ${(props) => props.theme.primaryColor};
    }
  }
`

const StyledSpan = styled.span`
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
`

const Label: React.FC = () => (
  <StyledLabel htmlFor="fullTime">
    <StyledInput id="fullTime" name="fullTime" type="checkbox" />
    <StyledSpan>Full time</StyledSpan>
  </StyledLabel>
)

export default Label
