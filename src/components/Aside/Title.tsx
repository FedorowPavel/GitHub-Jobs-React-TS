import React from 'react'
import styled from 'styled-components'

const H2Styled = styled.h2`
  text-transform: uppercase;
  color: ${(props) => props.theme.infoFontColor};
  font-size: ${(props) => props.theme.primaryFontSize}
`

const Title: React.FC<{text: string}> = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <H2Styled>{props.text}</H2Styled>
)

export default Title
