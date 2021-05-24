import styled from 'styled-components'
import React from 'react'
import StyledCompanySpan from './CompanyName'
import StyledTitleSpan from './JobTitle'
import FullTimeMark from './FullTimeMark'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const MainJobInfo: React.FC<{
    company: string,
    title: string
}> = ({ company, title }) => (
  <StyledDiv>
    <StyledCompanySpan>{company}</StyledCompanySpan>
    <StyledTitleSpan>{title}</StyledTitleSpan>
    <FullTimeMark />
  </StyledDiv>
)

export default MainJobInfo
