import { formatDistance } from 'date-fns'

export default function useGetDateDifference(date: string) {
  return formatDistance(new Date(), new Date(date), { addSuffix: false })
}
