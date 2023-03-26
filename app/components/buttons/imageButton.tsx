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
      <button className='flex items-center justify-center border-2 border-text bg-secondary space-x-1  w-[180px] h-[45px] rounded-lg transition duration-200 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)]'>
        <Image src={image} alt={alt} width={28} height={28} />
        <h1 className='text-lg font-semibold text-text'>{title}</h1>
      </button>
    </Link>
  )
}
