import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Loader from '../UI/Loader'
import JobItem from './JobCard/JobCard'
import { jobsActions } from '../../store/jobsSlice'
import Pagination from './JobCard/pagination'
import usePaginate from '../../custom-hooks/usePaginate'

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
  const dispatch = useDispatch()

  const {
    switchPageHandler,
    nextPageHandler,
    prevPageHandler,
    currPage,
    currJobPage,
    isLoading,
    numberOfPages
  } = usePaginate()

  useEffect(() => {
    dispatch(jobsActions.fetchJobs())
  }, [dispatch])

  if (isLoading) {
    return <Loader />
  }

  return (
    <StyledUl>
      {(currJobPage.map(({
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
      <Pagination
        currPage={currPage}
        switchPageHandler={switchPageHandler}
        numberOfPages={numberOfPages}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
      />
    </StyledUl>
  )
}

export default ListOfJobs
