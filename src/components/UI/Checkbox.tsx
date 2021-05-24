import styled from 'styled-components'
import React from 'react'
import Label from './Label'

const StyledCheckbox = styled.div`
  padding: 6px;
`

const Checkbox: React.FC = () => (
  <StyledCheckbox>
    <Label />
  </StyledCheckbox>
)
export default Checkbox
