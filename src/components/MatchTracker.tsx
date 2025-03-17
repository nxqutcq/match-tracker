import { useMatchesList } from '../services/queries'
import Loader from './shared/Loader'
import { MatchItem } from './MatchItem'
import ErrorComponent from './shared/ErrorComponent'
import RefreshButton from './RefreshButton'
import { StatusDropdown } from './StatusDropdown'
import { useState } from 'react'
import { MatchStatus } from '../types'

const MatchTracker = () => {
  const {
    data: matches,
    error,
    isLoading,
    refetch,
    isFetching,
  } = useMatchesList()

  const [selectedStatus, setSelectedStatus] = useState<
    MatchStatus | 'Все статусы' | null
  >(null)

  const filteredMatches = matches?.filter((match) =>
    !selectedStatus || selectedStatus === 'Все статусы'
      ? true
      : match.status === selectedStatus
  )

  if (isLoading) return <Loader />

  return (
    <main className="max-w-[1836px] min-h-[582px] mx-[0.5rem] md:mx-[2.625rem] mb-[2.625rem] flex flex-col w-full">
      {isFetching && <Loader />}
      <div className="flex justify-between flex-col md:flex-row items-center min-h-[56px] mt-[2.625rem] mb-[20px]">
        <div className='flex items-center flex-col md:flex-row  gap-[1.5rem]'>
          <h1 className="logo">Match Tracker</h1>
          <StatusDropdown
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
          />
        </div>
        <div className="flex items-center flex-wrap gap-[12px]">
          {!error && <ErrorComponent />}
          <RefreshButton refetch={refetch} isLoading={isLoading} />
        </div>
      </div>
      <ul className="flex flex-col gap-[12px] mt-[20px]">
        {filteredMatches?.map((match) => (
          <MatchItem key={match.title} match={match} />
        ))}
      </ul>
    </main>
  )
}

export default MatchTracker
