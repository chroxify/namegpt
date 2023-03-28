type DropDownFieldProps = {
  field: string
  title: string
  options: string[]
  setAmount: (v: string) => void
}

export default function DropDownField({
  field,
  title,
  options,
  setAmount
}: DropDownFieldProps) {
  return (
    <div className='flex flex-col w-full'>
      {/* Field Title Row */}
      <div className='flex justify-start items-center space-x-3'>
        <div className='flex items-center border-2 border-text bg-secondary justify-center  rounded-lg w-[35px] h-[35px] '>
          <h1 className='text-base font-semibold text-text pl-[1px]'>
            {field}.
          </h1>
        </div>
        <h1 className='text-lg font-semibold text-text'>{title}</h1>
      </div>
      {/* Dropdown with "Five" as default selection */}
      <select onChange={(v) => setAmount(v.target.value)}
      className='mt-2 w-full bg-secondary border-2 border-text  text-text text-base py-3 px-2 pr-8 rounded-lg leading-tight focus:outline-none appearance-none'>
        {options.map((option, index) => (
          <option key={index} value={option} selected={option === 'Three'}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
