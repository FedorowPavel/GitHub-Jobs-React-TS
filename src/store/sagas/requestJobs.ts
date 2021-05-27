// import { BASE_URL } from '../../constants'

export function requestJobs(URL: RequestInfo) {
  // eslint-disable-next-line no-console
  console.log('[requestJobs]...')

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => (data))
}
