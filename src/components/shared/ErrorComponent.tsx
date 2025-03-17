export const ErrorComponent = () => {
  return (
    <span className="bg-[#0F1318] h-[full] flex items-center gap-[10px] text-lg rounded-[4px] p-[16px]">
      <img
        className="w-[28px] h-[28px]"
        src="/src/assets/icons/alert.svg"
        alt="alert-icon"
      />
      Ошибка: не удалось загрузить информацию
    </span>
  )
}

export default ErrorComponent
