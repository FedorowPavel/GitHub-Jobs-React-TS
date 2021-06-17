import styled from 'styled-components'
import React from 'react'

const Footer = styled.footer`
  text-align: center;
  color: ${(props) => props.theme.infoFontColor};
  grid-column: 1 / 3;
  
  @media screen and (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }`

export default () => (
  <Footer>created by Pavel Fedorow</Footer>
)
