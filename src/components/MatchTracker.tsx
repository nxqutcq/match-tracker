import { useMatchesList } from '../services/queries'
import Loader from './shared/Loader'
import { MatchItem } from './MatchItem'
import ErrorComponent from './shared/ErrorComponent'
import RefreshButton from './RefreshButton'

const MatchTracker = () => {
  const {
    data: matches,
    error,
    isLoading,
    refetch,
    isFetching,
  } = useMatchesList()

  if (isLoading) return <Loader />

  return (
    <main className="max-w-[1836px] min-h-[582px] mx-[0.5rem] md:mx-[2.625rem] mb-[2.625rem] flex flex-col w-full">
      {isFetching && <Loader />}
      <div className="flex justify-between flex-col md:flex-row items-center min-h-[56px] mt-[2.625rem] mb-[20px]">
        <h1 className="logo">Match Tracker</h1>
        <div className="flex items-center flex-wrap gap-[12px]">
          {error && <ErrorComponent />}
          <RefreshButton refetch={refetch} isLoading={isLoading} />
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
