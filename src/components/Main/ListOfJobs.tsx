import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../UI/Loader'
import JobItem from './JobCard/JobCard'
import { jobsActions } from '../../store/jobsSlice'
import Pagination from './JobCard/pagination'
import usePaginate from '../../custom-hooks/usePaginate'
import { RootState } from '../../store'
import { BASE_URL, JOBS_PER_PAGE } from '../../constants'

export interface Job {
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
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const ListOfJobs: React.FC = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.jobs.isLoading)

  const {
    switchPageHandler,
    nextPageHandler,
    prevPageHandler,
    currPage,
    currJobPage,
    numberOfPages,
    curPart,
    totalJobs
  } = usePaginate()

  const paginationIsNeeded = totalJobs < JOBS_PER_PAGE
  const isNoJobs = currJobPage.length

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('[ListOfJobs] useEffect')
    dispatch(jobsActions.fetchJobs(`${BASE_URL}page=${curPart}`))
  }, [dispatch, curPart])

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
      {!paginationIsNeeded && (
      <Pagination
        currPage={currPage}
        switchPageHandler={switchPageHandler}
        numberOfPages={numberOfPages}
        nextPageHandler={nextPageHandler}
        prevPageHandler={prevPageHandler}
      />
      )}
      {!isNoJobs && <span>No jobs</span>}
    </StyledUl>
  )
}

export default ListOfJobs
