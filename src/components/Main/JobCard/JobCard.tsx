import styled from 'styled-components'
import React from 'react'
import CompanyLogo from './CompanyLogo'
import MainJobInfo from './MainJobInfo'
import AdditionalInfo from './AdditionalInfo'

const StyledListItem = styled.li`
  padding: 12px;
  background-color: white;
  margin-bottom: 32px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  position: relative;
`

const JobItem: React.FC<{
    company_logo: string,
    company: string,
    title: string,
    created_at: string,
    location: string
}> = ({
  company_logo, company, title, created_at, location
}) => (
  <StyledListItem>
    <CompanyLogo company_logo={company_logo} />
    <MainJobInfo company={company} title={title} />
    <AdditionalInfo date={created_at} location={location} />
  </StyledListItem>
)

export default JobItem
