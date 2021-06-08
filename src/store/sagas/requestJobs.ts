import { BASE_URL } from '../../constants'

interface IRequestParams {
  page?: string,
  location?: string,
  description?: string,
  full_time?: string,
}

const fetchData = (url: string): Promise<Object[]> => fetch(url)
  .then((response) => response.json())
  .then((data) => (data))

export function requestJobs({
  page, location, description, full_time
}: IRequestParams = { }) {
  console.log(page, location, description, full_time)
  // eslint-disable-next-line prefer-rest-params
  const urlEndPoint = Object.values(arguments[0]).join('&')

  return fetchData(`${BASE_URL}?${urlEndPoint}`)
}
