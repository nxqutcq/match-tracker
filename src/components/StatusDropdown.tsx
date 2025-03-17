import { MatchStatus } from '../types'
import { useState } from 'react'

type StatusDropdownProps = {
  selectedStatus: MatchStatus | 'Все статусы' | null
  onStatusChange: (status: MatchStatus | 'Все статусы' | null) => void
}

const statusOptions: (MatchStatus | 'Все статусы')[] = [
  'Все статусы',
  'Scheduled',
  'Ongoing',
  'Finished',
]

export const StatusDropdown = ({
  selectedStatus,
  onStatusChange,
}: StatusDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full md:w-[170px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex text-base min-h-[56px] max-h-[56px] justify-between w-full md:w-[170px] items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#13171C] transition-colors"
      >
        <span className="text-base gap-[0.75rem]">
          {selectedStatus === 'Все статусы' || !selectedStatus
            ? 'Все статусы'
            : selectedStatus}
        </span>
        <div className="w-[1.25rem] items-center flex justify-center h-[1.25rem]">
          <img
            src="/assets/icons/dropdown-arrow.svg"
            alt={isOpen ? 'Close' : 'Open'}
            className={`transition-transform duration-300 ease-out ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <ul
        className={`absolute z-10 mt-2 w-full bg-[#0B0E12] rounded-lg shadow-lg transition-all duration-300 ease-out transform ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {statusOptions.map((status) => (
          <li
            key={status}
            onClick={() => {
              onStatusChange(status === 'Все статусы' ? null : status)
              setIsOpen(false)
            }}
            className={`px-4 py-[0.625rem] cursor-pointer hover:bg-[#13171C] ${
              selectedStatus === status ||
              (status === 'Все статусы' && !selectedStatus)
                ? 'text-[#4F9CF9]'
                : 'text-white'
            }`}
          >
            {status}
          </li>
        ))}
      </ul>
    </div>
  )
}
