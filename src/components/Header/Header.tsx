import styled from 'styled-components'
import React from 'react'
import Logo from './Logo'
import HeaderSearch from './HeaderSearch'

const Header = styled.header`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`

export default () => (
  <Header>
    <Logo />
    <HeaderSearch />
  </Header>
)
