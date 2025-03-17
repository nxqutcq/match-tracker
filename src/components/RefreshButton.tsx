type RefreshButtonProps = {
  isLoading: boolean
  refetch: () => void
}

export const RefreshButton = ({ isLoading, refetch }: RefreshButtonProps) => {
  return (
    <button
      disabled={isLoading}
      className="refresh-button"
      onClick={() => refetch()}
    >
      <span>Обновить</span>
      <img
        className="w-[26px] h-[26px]"
        src="/assets/icons/Refresh.svg"
        alt="refresh-icon"
      />
    </button>
  )
}

export default RefreshButton
