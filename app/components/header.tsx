import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className='flex flex-col items-center w-[85%]'>
      {/* Header Content */}
      <div className='flex items-center justify-between w-full px-5 py-5'>
        <div>
          <div className='flex items-center'>
            <Image src='/logo.png' alt='Logo' width={70} height={70} />
            <h1 className='text-3xl font-bold text-text'>NameGPT</h1>
          </div>
        </div>

        <Link href='https://github.com'>
          <Image
            src='/github.svg'
            alt='Github'
            width={35}
            height={35}
            className='mx-3'
          />
        </Link>
      </div>
      {/* Divider */}
      <hr className='border-[1.5px] border-text rounded w-full' />
    </nav>
  )
}
