import { BASE_URL } from '../../constants'

export function requestJobs() {
  // eslint-disable-next-line no-console
  console.log('[requestJobs]...')

  return fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => (data))
}
