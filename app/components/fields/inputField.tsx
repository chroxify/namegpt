import * as React from 'react';

type InputFieldProps = {
  field: string
  title: string
  placeholder: string
  setPrompt: (v: string) => void
}

export default function InputField({
  field,
  title,
  placeholder,
  setPrompt
}: InputFieldProps) {
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
      <textarea onChange={(v) => setPrompt(v.target.value)}
        className='h-[80%] mt-2 p-3 border-2 border-text focus:outline-none rounded-lg bg-secondary text-text placeholder-text placeholder-opacity-70 text-xs md:text-sm lg:text-base'
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}
