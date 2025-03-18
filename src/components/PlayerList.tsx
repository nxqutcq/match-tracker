import { PlayerListProps } from '../types'

export const PlayerList: React.FC<PlayerListProps> = ({ players }) => (
  <ul className="flex gap-[0.5rem]">
    {players.map((player, index) => (
      <li
        key={index}
        className="flex w-full flex-wrap items-center gap-[8px] px-[24px] overflow-hidden rounded-[4px] bg-primary-bg"
      >
        <div className="flex gap-[0.5rem] justify-center items-center">
          <img
            src="/assets/images/avatar_global.png"
            className="w-[36px] h-[36px]"
            alt="avatar"
          />
          <span className="text-[#FAFAFA]">{player.username}</span>
        </div>
        <div>
          <span className="shrink-0 text-text-faded">Убийств: </span>
          <span className="text-text-highlight">{player.kills}</span>
        </div>
      </li>
    ))}
  </ul>
)
