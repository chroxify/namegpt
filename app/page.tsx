import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-col items-center justify-between'>
      {/* Nav Bar */}
      <div className='flex flex-col items-center w-full'>
        <nav className='flex justify-between items-center w-full px-[10%] py-5'>
          <div> 
            <div className='flex items-center'>
              <Image
                src='/logo.png'
                alt='Logo'
                width={70}
                height={70}
              />
              <h1 className='text-3xl font-bold text-text'>NameGPT</h1>
            </div>
          </div>
          <div className='flex items-center mx-3'>
            <Link href='https://github.com'> 
              <Image 
                src='/github.svg'
                alt='Github'
                width={35}
                height={35}
              /> 
            </Link>
          </div>
        </nav>
        {/* Horizontal Divider */}
        <div className='border-b-2 border-text w-[85%]'></div>
      </div>
      {/* Main Content */}
      <div className='flex flex-col items-center w-[60%] space-y-10'>
        {/* Star on Github Button */}
        <div className='flex items-center justify-center w-full scale-75 md:scale-100'>
          <Link href='https://github.com/chroxify/namegpt'>
            <button className='flex items-center border-2 border-text transition duration-200 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] space-x-1 justify-center w-[180px] h-[45px] bg-secondary rounded-lg'>
              <Image
                src='/star.svg'
                alt='Github'
                width={28}
                height={28}
              />
              <h1 className='text-lg font-semibold text-text'>Star on Github</h1>
            </button>
          </Link>
        </div>
        {/* Title */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug tracking-wide font-extrabold text-center text-text'>Generate your next<br/>project name using AI!</h1>
        {/* Main Content */}
        <div className='flex flex-col items-center sm:w-[80%] md:w-[80%] lg:w-[70%] space-y-6'>
          <div className='flex flex-col w-full'>
            {/* Field Title Row */}
            <div className='flex justify-start items-center space-x-3'>
              <div className='flex items-center border-2 border-text justify-center w-[35px] h-[35px] bg-secondary rounded-lg'>
                <h1 className='text-base font-semibold text-text pl-[1px]'>1.</h1>
              </div>
              <h1 className='text-lg font-semibold text-text'>Describe your project.</h1>
            </div>
            <textarea className='h-[80%] mt-2 p-3 border-2 border-text focus:outline-none rounded-lg bg-secondary text-text placeholder-text placeholder-opacity-70 text-xs md:text-sm lg:text-base' placeholder='An AI powered website generating random Project Names.'></textarea>
          </div>
          <div className='flex flex-col w-full'>
            {/* Field Title Row */}
            <div className='flex justify-start items-center space-x-3'>
              <div className='flex items-center border-2 border-text justify-center w-[35px] h-[35px] bg-secondary rounded-lg'>
                <h1 className='text-base font-semibold text-text pl-[1px]'>2.</h1>
              </div>
              <h1 className='text-lg font-semibold text-text'>Amount of names to generate.</h1>
            </div>
            {/* Dropdown with "Five" as default selection */}
            <div className='relative w-full mt-2'>
              <select className=' w-full bg-secondary border-2 border-text text-base text-text py-3 px-2 pr-8 rounded-lg leading-tight focus:outline-none appearance-none'>
                <option>One</option>
                <option>Five</option>
                <option>Three</option>
              </select>
            </div>
          </div>
        </div>
        {/* Generate Button */}
        <button className='flex items-center border-2 border-text transition duration-200 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] space-x-1 justify-center w-[180px] h-[45px] bg-primary bg-opacity-50 rounded-lg'>
          <h1 className='text-base font-semibold text-text'>Generate Names</h1>
        </button>
      </div>
      {/* Results */}
      <div className='flex flex-col items-center w-[60%] space-y-10'></div>
      {/* Footer */}
      <footer className="flex flex-col items-center w-full self-end">
        {/* Horizontal Divider */}
        <div className='border-b-2 border-text opacity-30 w-[85%]'></div>
        <div className="flex justify-between items-center w-full px-[10%]">
          <p className="text-base text-text text-opacity-80 m-5">
            Powered by <a href="https://openai.com/" className="text-text font-semibold hover:underline">OpenAI</a> and <a href="https://nextjs.org/" className="text-text font-semibold hover:underline">Next.js</a>
          </p>
          <div className='flex items-center'>
            <Link href='https://vercel.com' className='m-5 opacity-80 hover:opacity-100'>
                <Image
                  src='/vercel.svg'
                  alt='Vercel'
                  width={25}
                  height={25}
                />
            </Link>
            <Link href='https://github.com/chroxify/namegpt' className='opacity-80 hover:opacity-100'> 
                <Image
                  src='/github.svg'
                  alt='Github'
                  width={25}
                  height={25}
                /> 
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
