type ButtonProps = {
  title: string
}

export default function Button({ title }: ButtonProps) {
  return (
    <button className='flex items-center justify-center border-2 border-text space-x-1 w-[180px] h-[45px] bg-primary bg-opacity-50 rounded-lg transition duration-200 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)]'>
      <h1 className='text-base font-semibold text-text'>Generate Names</h1>
    </button>
  )
}
