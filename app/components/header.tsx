import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className='flex flex-col items-center w-[80%] sm:w-[65%] md:w-[75%] lg:w-[60%]'>
      {/* Header Content */}
      <div className='flex items-center justify-between w-full md:px-5 py-3 md:py-5'>
        <div>
          <div className='flex items-center'>
            <Image
              src='/logo.png'
              alt='Logo'
              width={70}
              height={70}
              className='scale-[0.80] md:scale-[0.85] lg:scale-100'
            />
            <h1 className='text-2xl lg:text-3xl font-bold text-text'>
              NameGPT
            </h1>
          </div>
        </div>

        <Link href='https://github.com'>
          <Image
            src='/github.svg'
            alt='Github'
            width={0}
            height={0}
            className='mx-3 w-[30px] h-[30px] md:w-[33px] md:h-[33px]'
          />
        </Link>
      </div>
      {/* Divider */}
      <hr className='border-[1.5px] border-text rounded w-full' />
    </nav>
  )
}
