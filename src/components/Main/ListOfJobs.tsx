import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../UI/Loader'
import JobItem from './JobCard/JobCard'
import { jobsActions } from '../../store/jobsSlice'
import Pagination from './JobCard/pagination'
import usePaginate from '../../custom-hooks/usePaginate'
import { RootState } from '../../store'
import { ITEMS_PER_PAGE } from '../../constants'
import { Job, PaginationInfo } from '../../Types/interfaces'

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const Jobs: React.FC = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.jobs.isLoading)
  const jobs = useSelector((state: RootState) => state.jobs.jobs)
  const isGotAllJobsFromApi = useSelector((state: RootState) => state.jobs.isGotAllJobsFromApi)

  const totalJobs = jobs.length

  const dataForPagination: PaginationInfo = {
    array: jobs,
    isGotAllDataFromApi: isGotAllJobsFromApi,
    totalDataItems: jobs.length
  }

  const {
    switchPageHandler,
    nextPageHandler,
    prevPageHandler,
    currPage,
    currDataPage,
    numberOfPages,
    curPart
  } = usePaginate(dataForPagination)

  const paginationIsNeeded = totalJobs < ITEMS_PER_PAGE
  const isNoJobs = currDataPage.length

  useEffect(() => {
    console.log('[ListOfJobs] useEffect')
    dispatch(jobsActions.fetchJobs({ page: `page=${curPart}` }))
  }, [dispatch, curPart])

  if (isLoading) {
    return <Loader />
  }

  return (
    <StyledUl>
      {(currDataPage.map(({
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

export default Jobs
