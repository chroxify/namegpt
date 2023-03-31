import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center w-[80%] sm:w-[65%] md:w-[75%] lg:w-[60%]'>
      {/* Horizontal Divider */}
      <hr className='border-[1.5px] border-text opacity-30 rounded w-full' />

      {/* Content Row */}
      <div className='flex justify-between items-center w-full'>
        {/* Credits */}
        <p className='text-base text-text text-opacity-80 m-5'>
          Powered by{' '}
          <Link
            href='https://openai.com/'
            className='text-text font-semibold hover:underline'
          >
            OpenAI
          </Link>{' '}
        </p>

        {/* Links */}
        <div className='flex items-center space-x-5 m-5'>
          <Link
            href='https://vercel.com'
            className='opacity-80 hover:opacity-100'
          >
            <Image src='/vercel.svg' alt='Vercel' width={25} height={25} />
          </Link>
          <Link
            href='https://github.com/chroxify/namegpt'
            className='opacity-80 hover:opacity-100'
          >
            <Image src='/github.svg' alt='Github' width={25} height={25} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
