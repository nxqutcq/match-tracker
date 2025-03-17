import { useMatchesList } from '../services/queries'
import { MatchItem } from './MatchItem'

const MatchTracker = () => {
  const { data: matches, error, isLoading, refetch } = useMatchesList()

  if (isLoading) {
    return (
      <div className="max-w-[1836px] w-full items-center flex justify-center min-h-dvh">
        Загрузка...
      </div>
    )
  }

  return (
    <main className="max-w-[1836px] min-h-[582px] mx-[42px] flex flex-col w-full">
      <div className="flex justify-between items-center min-h-[56px] mt-[42px] mb-[20px]">
        <h1 className="logo">Match Tracker</h1>
        <div className="flex items-center gap-[12px]">
          {error && (
            <span className="bg-[#0F1318] flex items-center gap-[10px] text-lg rounded-[4px] p-[16px]">
              <img
                className="w-[28px] h-[28px]"
                src="/src/assets/icons/alert.svg"
                alt="alert-icon"
              />
              Ошибка: не удалось загрузить информацию
            </span>
          )}
          <button
            disabled={isLoading}
            className="refresh-button"
            onClick={() => refetch()}
          >
            <span>Обновить</span>
            <img
              className="w-[26px] h-[26px]"
              src="/src/assets/icons/Refresh.svg"
              alt="refresh-icon"
            />
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-[12px] mt-[20px]">
        {matches?.map((match) => (
          <MatchItem key={match.title} match={match} />
        ))}
      </ul>
    </main>
  )
}

export default MatchTracker
