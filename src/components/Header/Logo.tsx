import React from 'react'
import styled from 'styled-components'

const LogoText = styled.div`
    font-size: ${(props) => props.theme.logoTextSize};
    padding: 32px 0;
`

function Logo(): JSX.Element {
  return (
    <LogoText>
      <strong>GitHub</strong>
      <span> Jobs</span>
    </LogoText>
  )
}

export default Logo
