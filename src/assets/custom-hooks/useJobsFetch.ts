import { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants'

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

export default function useJobsFetch() {
  const [items, setItems] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .finally(() => setIsLoading(false))
  }, [])

  // eslint-disable-next-line no-console
  console.log(items)

  return { items, isLoading }
}
