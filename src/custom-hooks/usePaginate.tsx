import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { INITIAL_PAGE, JOBS_PER_PAGE } from '../constants'

export default function usePaginate() {
  const [currPage, setCurrPage] = useState(INITIAL_PAGE)
  const [curPart, setCurPart] = useState(1)
  const jobs = useSelector((state: RootState) => state.jobs.jobs)
  const isGotAllJobsFromApi = useSelector((state: RootState) => state.jobs.isGotAllJobsFromApi)

  const totalJobs = jobs.length
  const lastJobIndex = currPage * JOBS_PER_PAGE
  const firstJobIndex = lastJobIndex - JOBS_PER_PAGE
  const currJobPage = jobs.slice(firstJobIndex, lastJobIndex)
  const numberOfPages = Math.ceil(totalJobs / JOBS_PER_PAGE)

  const switchPageHandler = (pageNumber: number): void => {
    setCurrPage(pageNumber)
    if (totalJobs === JOBS_PER_PAGE * pageNumber) {
      setCurPart(curPart + 1)
    }
  }

  const nextPageHandler = (): void => {
    if (currPage === numberOfPages - 1 && !isGotAllJobsFromApi) {
      setCurPart(curPart + 1)
    }
    if (currPage === numberOfPages) {
      return
    }
    setCurrPage((prev) => prev + 1)
  }

  const prevPageHandler = (): void => {
    if (currPage === 1) {
      return
    }
    setCurrPage((prev) => prev - 1)
  }

  return {
    switchPageHandler,
    nextPageHandler,
    prevPageHandler,
    currPage,
    currJobPage,
    numberOfPages,
    curPart,
    totalJobs
  }
}
