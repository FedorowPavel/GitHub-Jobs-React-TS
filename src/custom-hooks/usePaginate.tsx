import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function usePaginate() {
  const [currPage, setCurrPage] = useState(1)
  const [jobsOnPage] = useState(5)
  const jobs = useSelector((state: RootState) => state.jobs.jobs)
  const isLoading = useSelector((state: RootState) => state.jobs.isLoading)

  const totalJobs = jobs.length
  const lastJobIndex = currPage * jobsOnPage
  const firstJobIndex = lastJobIndex - jobsOnPage
  const currJobPage = jobs.slice(firstJobIndex, lastJobIndex)
  const numberOfPages = Math.ceil(totalJobs / jobsOnPage)

  const switchPageHandler = (pageNumber: number): void => {
    setCurrPage(pageNumber)
  }
  const nextPageHandler = (): void => {
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
    isLoading,
    numberOfPages
  }
}
