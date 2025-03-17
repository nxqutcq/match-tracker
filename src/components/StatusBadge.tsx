import React from 'react'

interface StatusBadgeProps {
  status: string
}

const statusStyles: Record<string, string> = {
  Finished: 'bg-[#EB0237] text-white',
  Ongoing: 'bg-[#43AD28] text-white',
  Scheduled: 'bg-yellow-500 text-black',
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const className = statusStyles[status] || 'bg-gray-500 text-white'
  return (
    <span
      className={`py-[6px] px-[2px] min-h-[27px] items-center gap-[10px] justify-center text-xs flex min-w-[92px] rounded ${className}`}
    >
      {status}
    </span>
  )
}

export default StatusBadge
