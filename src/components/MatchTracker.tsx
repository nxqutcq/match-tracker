import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { ApiResponse, Match } from '../types'

const fetchMatches = async (): Promise<Match[]> => {
  const response = await fetch(
    'https://app.ftoyd.com/fronttemp-service/fronttemp'
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data: ApiResponse = await response.json()
  return data.data.matches
}

const MatchTracker: React.FC = () => {
  const {
    data: matches,
    error,
    isLoading,
    refetch,
  } = useQuery<Match[], Error>({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  })

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (error) {
    return <div>Ошибка: не удалось загрузить информацию</div>
  }

  return (
    <div>
      <h1>Матч-трекер</h1>
      <button onClick={() => refetch()}>Обновить</button>
      <ul>
        {matches?.map((match) => (
          <li key={match.title}>
            <div>
              {match.homeTeam.name} - {match.awayTeam.name}
            </div>
            <div>
              Счет: {match.homeScore}:{match.awayScore}
            </div>
            <div>Статус: {match.status}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MatchTracker
