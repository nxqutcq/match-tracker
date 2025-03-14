import React from 'react'
import { useMatchesList } from '../services/queries'

const MatchTracker: React.FC = () => {
  const { data: matches, error, isLoading, refetch } = useMatchesList()

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
