import React from 'react'
import styled from 'styled-components'

import image from '../../assets/images/skyscrapers.png'
import HeaderSearchForm from './HeaderSearchForm'

const WrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 138px;
    width: 100%;
    border-radius: 8px;
    background-image: url('${image}');
    background-position: center center;
`

function HeaderSearch(): JSX.Element {
  return (
    <WrapperStyled>
      <HeaderSearchForm />
    </WrapperStyled>
  )
}

export default HeaderSearch
