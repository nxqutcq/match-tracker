import { PlayerListProps } from '../types'

export const PlayerList: React.FC<PlayerListProps> = ({ players }) => (
  <ul className="flex gap-[0.5rem] xxs:flex-wrap xs1:flex-nowrap flex-col xs:flex-row">
    {players.map((player, index) => (
      <li
        key={index}
        className="flex w-full justify-center px-[0.5rem] flex-wrap flex-row min-h-[4.375rem] md:min-h-[3.25rem] py-[0.438rem] md:py-[0.625rem] items-center gap-[4px] md:gap-[8px] md:px-[1.5rem] rounded-[4px] bg-primary-bg"
      >
        <div className="md:flex items-center flex-nowrap flex justify-center gap-[0.5rem]">
          <img
            src="/assets/images/avatar_global.png"
            className="md:w-[36px] md:h-[36px] w-[32px] h-[32px]"
            alt="avatar"
          />
          <span className="text-[#FAFAFA] leading-[150%] break-all tracking-[0%] text-sm md:text-base">
            {player.username}
          </span>
        </div>
        <div className="shrink-0 items-center gap-[0.5rem]">
          <span className="text-text-faded text-xs md:text-sm">Убийств: </span>
          <span className="text-text-highlight text-sm md:text-base">
            {player.kills}
          </span>
        </div>
      </li>
    ))}
  </ul>
)
