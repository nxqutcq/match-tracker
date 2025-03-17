import { MatchStatus } from '../types'
import { useState } from 'react'

type StatusDropdownProps = {
  selectedStatus: MatchStatus | 'All' | null
  onStatusChange: (status: MatchStatus | 'All' | null) => void
}

const statusOptions: (MatchStatus | 'All')[] = [
  'All',
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
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#0B0E12] px-4 py-2 rounded-lg hover:bg-[#13171C] transition-colors"
      >
        <span>
          {selectedStatus === 'All' || !selectedStatus
            ? 'All Statuses'
            : selectedStatus}
        </span>
        <img
          src="/assets/icons/arrow drop-list down.svg"
          alt={isOpen ? 'Close' : 'Open'}
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-[#0B0E12] rounded-lg shadow-lg">
          {statusOptions.map((status) => (
            <li
              key={status}
              onClick={() => {
                onStatusChange(status === 'All' ? null : status)
                setIsOpen(false)
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-[#13171C] ${
                selectedStatus === status ||
                (status === 'All' && !selectedStatus)
                  ? 'text-[#4F9CF9]'
                  : 'text-white'
              }`}
            >
              {status}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
