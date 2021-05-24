import styled from 'styled-components'
import React from 'react'
import notFoundImage from '../../../assets/images/not-found.jpg'
import StyledImage from './Image'

const StyledLogoDiv = styled.div`
  height: 90px;
  width: 90px;
  min-height: 90px;
  min-width: 90px;
  margin-right: 16px;
`

const CompanyLogo: React.FC<{
    company_logo: string,
}> = ({ company_logo }) => (
  <StyledLogoDiv>
    <StyledImage
      src={company_logo !== null
        ? company_logo
        : notFoundImage}
      alt="logo"
    />
  </StyledLogoDiv>
)

export default CompanyLogo
