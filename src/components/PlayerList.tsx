import { PlayerListProps } from '../types'

export const PlayerList: React.FC<PlayerListProps> = ({ players }) => (
  <ul className="flex gap-[0.5rem] flex-col xs:flex-row">
    {players.map((player, index) => (
      <li
        key={index}
        className="flex w-full min-h-[3.25rem] py-[0.625rem] justify-between flex-wrap items-center gap-[8px] px-[24px] overflow-hidden rounded-[4px] bg-primary-bg"
      >
        <div className="flex gap-[0.5rem] justify-center items-center">
          <img
            src="/assets/images/avatar_global.png"
            className="md:w-[36px] md:h-[36px] w-[32px] h-[32px]"
            alt="avatar"
          />
          <span className="text-[#FAFAFA] text-sm md:text-base">
            {player.username}
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[0.5rem]">
          <span className="shrink-0 text-text-faded text-xs md:text-sm">
            Убийств:
          </span>
          <span className="text-text-highlight text-sm md:text-base">
            {player.kills}
          </span>
        </div>
      </li>
    ))}
  </ul>
)
