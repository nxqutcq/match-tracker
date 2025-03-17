import { useState } from 'react'
import { Match } from '../types'
import StatusBadge from './StatusBadge'

export const MatchItem: React.FC<{ match: Match }> = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className="bg-[#0B0E12] p-[16px] rounded-[16px] cursor-pointer flex flex-col"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[14px]">
          <img
            src="/src/assets/icons/illustrations_role.svg"
            alt="homeTeam-icon"
            className="w-6 h-6"
          />
          <div>{match.homeTeam.name}</div>
        </div>
        <div className="flex flex-col items-center gap-[4px] min-h-[55px] max-w-[92px] w-full justify-center">
          <div className="score-text">
            {match.homeScore}:{match.awayScore}
          </div>
          <StatusBadge status={match.status} />
        </div>
        <div className="flex">
          <div className="flex items-center gap-[14px]">
            <div>{match.awayTeam.name}</div>
            <img
              src="/src/assets/icons/illustrations_role.svg"
              alt="awayTeam-icon"
              className="w-6 h-6"
            />
          </div>
          <button className="ml-2 cursor-pointer">
            <img
              src="/src/assets/icons/arrow drop-list down.svg"
              alt={isOpen ? 'Collapse' : 'Expand'}
              className={`w-6 h-6 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 p-[12px]">
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <div>
                <ul className="flex gap-[8px]">
                  {match.homeTeam.players.map((player, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-[8px] px-[24px] rounded-[4px] bg-[#101318] justify-between"
                    >
                      <div className="flex items-center">
                        <img
                          src="/src/assets/images/avatar_global.svg"
                          className="w-[36px] h-[36px]"
                          alt="avatar"
                        />
                        <span>{player.username}</span>
                      </div>
                      <span>Убийств: {player.kills}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 flex py-[14px] rounded-[4px] justify-between px-[24px] gap-[8px] text-sm bg-[#101318]">
                <p>
                  <span className="text-[#FAFAFA66]">Points:</span> +
                  <span className="text-[#F2F6F6]">
                    {match.homeTeam.points}
                  </span>
                </p>
                <p>Place: {match.homeTeam.place}</p>
                <p>Total Kills: {match.homeTeam.total_kills}</p>
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <div>
                <ul className="flex gap-[8px]">
                  {match.awayTeam.players.map((player, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-[8px] px-[24px] rounded-[4px] bg-[#101318] justify-between"
                    >
                      <div className="flex items-center">
                        <img
                          src="/src/assets/images/avatar_global.svg"
                          className="w-[36px] h-[36px]"
                          alt="avatar"
                        />
                        <span>{player.username}</span>
                      </div>
                      <span>Убийств: {player.kills}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 flex py-[14px] rounded-[4px] justify-between px-[24px] gap-[8px] text-sm bg-[#101318]">
                <p>Points: +{match.awayTeam.points}</p>
                <p>Place: {match.awayTeam.place}</p>
                <p>Total Kills: {match.awayTeam.total_kills}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}
