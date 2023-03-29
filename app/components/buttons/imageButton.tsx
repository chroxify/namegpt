import Link from 'next/link'
import Image from 'next/image'

type ButtonProps = {
  title: string
  link: string
  image: string
  alt: string
}

export default function ImageButton({ title, link, image, alt }: ButtonProps) {
  return (
    <Link href={link}>
      <button className='flex items-center justify-center border-2 border-text bg-secondary space-x-1 w-40 h-11 md:w-[180px] md:h-[45px] rounded-lg transition duration-[400ms] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]'>
        <Image
          src={image}
          alt={alt}
          width={0}
          height={0}
          className='w-[28px] h-[28px] md:w-[30px] md:h-[30px]'
        />
        <h1 className='md:text-lg font-semibold text-text'>{title}</h1>
      </button>
    </Link>
  )
}
