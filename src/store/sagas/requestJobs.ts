import { BASE_URL } from '../../constants'

interface IRequestParams {
  page?: string,
  location?: string,
  description?: string
}

const fetchData = (url: string): Promise<Object[]> => fetch(url)
  .then((response) => response.json())
  .then((data) => (data))

export function requestJobs({ page, location, description }: IRequestParams = { }) {
  return fetchData(`${BASE_URL}?${page}&${location}&${description}`)
}
