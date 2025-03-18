import { useState } from 'react'
import StatusBadge from './StatusBadge'
import { Match } from '../types'
import { PlayerList } from './PlayerList'
import { TeamSummary } from './TeamSummary'

export const MatchItem: React.FC<{ match: Match }> = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className="bg-[#0B0E12] pb-[0] md:pb-[1rem] p-[0.5rem] md:p-[1rem] rounded-[4px] cursor-pointer flex flex-col"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[6px] md:gap-[14px]">
          <img
            src="/assets/icons/illustrations_role.svg"
            alt="homeTeam-icon"
            className="md:w-[48px] md:h-[48px] w-[28px] h-[28px]"
          />
          <div className="team-name">{match.homeTeam.name}</div>
        </div>
        <div className="flex flex-col items-center gap-[4px] min-h-[55px] max-w-[92px] w-full justify-center">
          <div className="score-text">
            {match.homeScore} : {match.awayScore}
          </div>
          <StatusBadge status={match.status} />
        </div>
        <div className="flex">
          <div className="flex items-center gap-[14px]">
            <div className="team-name">{match.awayTeam.name}</div>
            <img
              src="/assets/icons/illustrations_role.svg"
              alt="awayTeam-icon"
              className="md:w-[48px] md:h-[48px] w-[28px] h-[28px]"
            />
          </div>
          <button className="ml-2 hidden md:block cursor-pointer">
            <img
              src="/assets/icons/arrow drop-list down.svg"
              alt={isOpen ? 'Collapse' : 'Expand'}
              className={`w-6 h-6 transition-transform duration-200 ${
                isOpen ? 'hidden' : 'block'
              }`}
            />
          </button>
          <button className="ml-2 hidden md:block cursor-pointer">
            <img
              src="/assets/icons/chevron-up.svg"
              alt={isOpen ? 'Collapse' : 'Expand'}
              className={`w-6 h-6 transition-transform duration-200 ${
                isOpen ? 'block' : 'hidden'
              }`}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-[12px] overflow-hidden">
          <div className="flex flex-col justify-between">
            <PlayerList players={match.homeTeam.players} />
            <TeamSummary
              points={match.homeTeam.points}
              place={match.homeTeam.place}
              totalKills={match.homeTeam.total_kills}
            />
          </div>
          <div className="lg:hidden flex w-full gap-[10px] items-center">
            <div className="flex-grow border-t border-[#13181F]"></div>
            <span className="px-2 text-sm text-[#313A47]">VS</span>
            <div className="flex-grow border-t border-[#13181F]"></div>
          </div>
          <div className="flex flex-col justify-between">
            <PlayerList players={match.awayTeam.players} />
            <TeamSummary
              points={match.awayTeam.points}
              place={match.awayTeam.place}
              totalKills={match.awayTeam.total_kills}
            />
          </div>
        </div>
      )}
      <div className="flex w-full p-[0.5rem] items-center md:hidden justify-center">
        <button className="ml-2 cursor-pointer">
          <img
            src="/assets/icons/arrow drop-list down.svg"
            alt={isOpen ? 'Collapse' : 'Expand'}
            className={`w-6 h-6 transition-transform duration-200 ${
              isOpen ? 'hidden' : 'block'
            }`}
          />
        </button>
        <button className="ml-2 cursor-pointer">
          <img
            src="/assets/icons/chevron-up.svg"
            alt={isOpen ? 'Collapse' : 'Expand'}
            className={`w-6 h-6 transition-transform duration-200 ${
              isOpen ? 'block' : 'hidden'
            }`}
          />
        </button>
      </div>
    </li>
  )
}
