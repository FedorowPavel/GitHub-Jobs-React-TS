import React from 'react'

import styled from 'styled-components'
import Button from '../UI/Button'
import InputSearch from '../UI/InputSearch'

const FormStyled = styled.form`
  width: 65%;
  position: relative;
`

function HeaderSearchForm(): JSX.Element {
  return (
    <FormStyled>
      <InputSearch type="text" placeholder="Title, companies, expertise or benefits" />
      <Button type="submit">Search</Button>
    </FormStyled>
  )
}

export default HeaderSearchForm
