import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants'
import { IJob } from '../Types/interfaces'

export default function useJobsFetch() {
  const [items, setItems] = useState<IJob[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .finally(() => setIsLoading(false))
  }, [])

  return { items, isLoading }
}
