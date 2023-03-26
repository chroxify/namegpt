import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import ImageButton from './components/buttons/imageButton'
import Button from './components/buttons/button'
import InputField from './components/fields/inputField'
import DropDownField from './components/fields/dropDownField'

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-col items-center justify-between'>
      {/* Nav Bar */}
      <Header />

      {/* Main Content */}
      <div className='flex flex-col items-center w-[60%] space-y-10'>
        {/* Star on Github Button */}
        <ImageButton
          title='Star on Github'
          link='https://github.com/chroxify/namegpt'
          image='/star.svg'
          alt='star'
        />

        {/* Title */}
        <h1 className='tracking-wide font-extrabold text-center text-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
          Generate your next
          <br />
          project name using AI!
        </h1>

        {/* Input Fields */}
        <div className='flex flex-col items-center space-y-6 sm:w-[80%] md:w-[80%] lg:w-[70%]'>
          <InputField
            field='1'
            title='Describe your project.'
            placeholder='An AI powered website generating random Project Names.'
          />
          <DropDownField
            field='2'
            title='Select the type of name you want.'
            options={['One', 'Three', 'Five']}
          />
        </div>

        {/* Generate Button */}
        <Button title='Generate Names' />
      </div>

      {/* Results */}
      <div className='flex flex-col items-center w-[60%] space-y-10'></div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
