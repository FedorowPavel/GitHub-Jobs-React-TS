import { useState } from 'react'
import { INITIAL_PAGE, ITEMS_PER_PAGE } from '../constants'
import { PaginationInfo } from '../Types/interfaces'

export default function usePaginate(data: PaginationInfo) {
  const [currPage, setCurrPage] = useState(INITIAL_PAGE)
  const [curPart, setCurPart] = useState(1)

  const lastDataIndex = currPage * ITEMS_PER_PAGE
  const firstDataIndex = lastDataIndex - ITEMS_PER_PAGE
  const currDataPage = data.array.slice(firstDataIndex, lastDataIndex)
  const numberOfPages = Math.ceil(data.totalDataItems / ITEMS_PER_PAGE)

  const switchPageHandler = (pageNumber: number): void => {
    setCurrPage(pageNumber)
    if (data.totalDataItems === ITEMS_PER_PAGE * pageNumber) {
      setCurPart(curPart + 1)
    }
  }

  const nextPageHandler = (): void => {
    if (currPage === numberOfPages - 1 && !data.isGotAllDataFromApi) {
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
    currDataPage,
    numberOfPages,
    curPart
  }
}
