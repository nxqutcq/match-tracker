import { TeamSummaryProps } from '../types'

export const TeamSummary: React.FC<TeamSummaryProps> = ({
  points,
  place,
  totalKills,
}) => (
  <div className="mt-2 flex py-[14px] overflow-hidden rounded-[4px] justify-between px-[24px] gap-[0.5rem] text-sm bg-primary-bg">
    <p>
      <span className="text-text-faded">Points:</span> +
      <span className="text-text-highlight">{points}</span>
    </p>
    <p className="text-text-faded">
      Place: <span className="text-text-highlight">{place}</span>
    </p>
    <p className="text-text-faded">
      Total Kills: <span className="text-text-highlight">{totalKills}</span>
    </p>
  </div>
)
