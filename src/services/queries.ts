import { useQuery } from '@tanstack/react-query'
import { getMatchesList } from './api'
import { Match } from '../types'

export function useMatchesList() {
  return useQuery<Match[], Error>({
    queryKey: ['matches'],
    queryFn: getMatchesList,
  })
}
