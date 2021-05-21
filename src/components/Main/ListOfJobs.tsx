import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StyledListItem from './JobCard'
import Loader from '../UI/Loader'

const BASE_URL: string = '/positions.json'

interface Jobs {
  id: string,
  title: string,
  company: string,
  companyLogo: string,
  companyUrl: string,
  createdAt: string,
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
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function fetchJobs() {
    setIsLoading(true)
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        const listIfJobs = data.map((job: Jobs) => ({
          id: job.id,
          title: job.title,
          company: job.company
        }))
        // eslint-disable-next-line
        // console.log(data)
        setItems(listIfJobs)
        setIsLoading(false)
        return listIfJobs
      })
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const listJobs = items.map((item: Jobs) => (
    <StyledListItem key={item.id}>{item.title}</StyledListItem>
  ))

  const content = !isLoading ? listJobs : <Loader />

  return (
    <StyledUl>
      {content}
    </StyledUl>

  )
}

export default ListOfJobs
