import React from 'react'
import styled from 'styled-components'
import Loader from '../UI/Loader'
import useJobsFetch from '../../custom-hooks/useJobsFetch'
import JobItem from './JobCard/JobCard'

interface Job {
  id: string,
  title: string,
  company: string,
  company_logo: string,
  company_url: string,
  created_at: string,
  description: string,
  location: string,
  type: string,
  url: string,
}

const StyledUl = styled.ul`
  padding: 0;
  position: relative;
`

const ListOfJobs: React.FC = () => {
  const { isLoading, items } = useJobsFetch()

  if (isLoading) {
    return <Loader />
  }

  return (
    <StyledUl>
      {(items.map(({
        company_logo, id, company, title, created_at, location
      }: Job) => (
        <JobItem
          key={id}
          company_logo={company_logo}
          company={company}
          title={title}
          created_at={created_at}
          location={location}
        />

      )))}
    </StyledUl>
  )
}

export default ListOfJobs
