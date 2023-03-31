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
      className='flex items-center justify-center border-2 border-text space-x-1 w-full h-[45px] bg-secondary rounded-lg transition duration-[375ms] hover:scale-105'
    >
      <h1 className='lg:text-lg font-semibold text-text'>{title}</h1>
    </button>
  )
}
