import { useState } from 'react'
import { Match } from '../types'
import StatusBadge from './StatusBadge'

export const MatchItem: React.FC<{ match: Match }> = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className="bg-[#0B0E12] p-[1rem] rounded-[1rem] cursor-pointer flex flex-col"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[14px]">
          <img
            src="/assets/icons/illustrations_role.svg"
            alt="homeTeam-icon"
            className="w-[auto] h-[auto]"
          />
          <div className="team-name">{match.homeTeam.name}</div>
        </div>
        <div className="flex flex-col items-center gap-[4px] min-h-[55px] max-w-[92px] w-full justify-center">
          <div className="score-text">
            {match.homeScore}:{match.awayScore}
          </div>
          <StatusBadge status={match.status} />
        </div>
        <div className="flex">
          <div className="flex items-center gap-[14px]">
            <div className="team-name">{match.awayTeam.name}</div>
            <img
              src="/assets/icons/illustrations_role.svg"
              alt="awayTeam-icon"
              className="w-[48px] h-[48px]"
            />
          </div>
          <button className="ml-2 hidden md:block cursor-pointer">
            <img
              src="/assets/icons/arrow drop-list down.svg"
              alt={isOpen ? 'Collapse' : 'Expand'}
              className={`w-6 h-6 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 p-[12px] grid grid-cols-1 md:grid-cols-2 gap-[12px] overflow-hidden">
          <div className="md:pr-2">
            <div>
              <ul className="flex gap-[0.5rem]">
                {match.homeTeam.players.map((player, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-[8px] px-[24px] overflow-hidden rounded-[4px] bg-primary-bg justify-between"
                  >
                    <div className="flex gap-[0.5rem] flex-wrap justify-center items-center">
                      <img
                        src="/assets/images/avatar_global.svg"
                        className="w-[36px] h-[36px]"
                        alt="avatar"
                      />
                      <span className="min-w-[149px] text-[#FAFAFA]">
                        {player.username}
                      </span>
                    </div>
                    <span className="shrink-0 text-text-faded">
                      Убийств:{' '}
                      <span className="text-text-highlight">
                        {player.kills}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-2 flex py-[14px] overflow-hidden rounded-[4px] justify-between px-[24px] gap-[0.5rem] text-sm bg-primary-bg">
              <p>
                <span className="text-text-faded">Points:</span> +
                <span className="text-text-highlight">
                  {match.homeTeam.points}
                </span>
              </p>
              <p className="text-text-faded">
                Place:{' '}
                <span className="text-text-highlight">
                  {match.homeTeam.place}
                </span>
              </p>
              <p className="text-text-faded">
                Total Kills:{' '}
                <span className="text-text-highlight">
                  {match.homeTeam.total_kills}
                </span>
              </p>
            </div>
          </div>
          <div className="md:pl-2">
            <div>
              <ul className="flex gap-[8px] shrink-0">
                {match.awayTeam.players.map((player, index) => (
                  <li
                    key={index}
                    className="flex w-full items-center gap-[0.5rem] px-[24px] rounded-[4px] bg-primary-bg justify-between"
                  >
                    <div className="flex gap-[0.5rem] justify-center items-center">
                      <img
                        src="/assets/images/avatar_global.svg"
                        className="w-[36px] h-[36px]"
                        alt="avatar"
                      />
                      <span className="min-w-[149px] text-[#FAFAFA]">
                        {player.username}
                      </span>
                    </div>
                    <span className="shrink-0 text-text-faded">
                      Убийств:{' '}
                      <span className="text-text-highlight">
                        {player.kills}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-2 flex py-[14px] overflow-hidden rounded-[4px] justify-between px-[24px] gap-[8px] text-sm bg-primary-bg">
              <p className="text-text-faded">
                Points: +
                <span className="text-text-highlight">
                  {match.awayTeam.points}
                </span>
              </p>
              <p className="text-text-faded">
                Place:{' '}
                <span className="text-text-highlight">
                  {match.awayTeam.place}
                </span>
              </p>
              <p className="text-text-faded">
                Total Kills:{' '}
                <span className="text-text-highlight">
                  {match.awayTeam.total_kills}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      <button className="ml-2 md:hidden cursor-pointer">
        <img
          src="/assets/icons/arrow drop-list down.svg"
          alt={isOpen ? 'Collapse' : 'Expand'}
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </li>
  )
}
