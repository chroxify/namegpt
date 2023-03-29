type ButtonProps = {
  title: string
  notify: () => void
}

export default function Button({ title, notify }: ButtonProps) {
  const handleClick = () => {
    navigator.clipboard.writeText(title)

    // Notify user that value has been copied to clipboard
    notify()
  }

  return (
    // Button with onClick that copies value to clipboard
    <button
      onClick={handleClick}
      className='flex items-center justify-center border-2 border-text space-x-1 w-40 h-11 md:w-[180px] md:h-[45px] bg-secondary bg-opacity-50 rounded-lg transition duration-[375ms] hover:scale-105'
    >
      <h1 className='md:text-lg font-semibold text-text'>{title}</h1>
    </button>
  )
}
