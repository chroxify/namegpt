'use client'
import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import toast, { Toaster, useToasterStore } from 'react-hot-toast'
import Header from './components/header'
import Footer from './components/footer'
import ImageButton from './components/buttons/imageButton'
import Button from './components/buttons/button'
import InputField from './components/fields/inputField'
import DropDownField from './components/fields/dropDownField'

const TOAST_LIMIT = 3

export default function Home() {
  const [names, setNames] = useState([])
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState('Three')
  const [prompt, setPrompt] = useState(
    'An website that summarizes blog posts for you.'
  )

  const notify = () =>
    toast.success('Name copied!', {
      position: 'bottom-center',
      style: {
        border: '2px solid #191C1B',
        borderRadius: '8px',
        background: '#fff',
        color: '#191C1B',
      },
      iconTheme: {
        primary: '#191C1B',
        secondary: '#fff',
      },
    })

  const { toasts } = useToasterStore()

  // Enforce Limit
  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
      .forEach((t) => toast.dismiss(t.id)) // Dismiss – Use toast.remove(t.id) removal without animation
  }, [toasts])

  async function generateNames() {
    // Set loading to true
    setLoading(true)

    // Fetch data from API
    const res = fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({
        amount: amount,
        prompt: prompt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(JSON.stringify(data))
        setNames(data.names)
        setLoading(false)
      })
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-between gap-20'>
      {/* Toasts */}
      <Toaster />

      {/* Nav Bar */}
      <Header />

      {/* Make sure theres always min. 20px space between, incase there is not palce div with mt-20 in between */}
      <main className='flex flex-col items-center w-[80%] md:w-[60%] xl:w-[50%] space-y-10'>
        {/* Content */}
        {/* Github Button */}
        <ImageButton
          title='Star on Github'
          link='https://github.com/chroxify/namegpt'
          image='/star.svg'
          alt='star'
        />

        {/* Title */}
        <h1 className='tracking-wide font-extrabold text-center text-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl'>
          Generate your next
          <br />
          project name using AI!
        </h1>

        {/* Input Fields */}
        <div className='flex flex-col items-center space-y-6 w-full xs:w-[90%] sm:w-[80%] md:w-[80%] lg:w-[70%]'>
          <InputField
            field='1'
            title='Describe your project.'
            placeholder={prompt}
            setPrompt={(v: string) => {
              setPrompt(v)
            }}
          />
          <DropDownField
            field='2'
            title='Amount to generate.'
            options={['One', 'Three', 'Five']}
            setAmount={(v: string) => {
              setAmount(v)
            }}
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={generateNames}
          disabled={loading}
          className='flex items-center justify-center border-2 border-text space-x-1 w-40 h-11 md:w-[180px] md:h-[45px] bg-primary bg-opacity-50 rounded-lg transition duration-[400ms] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]'
        >
          <h1 className='md:text-lg font-semibold text-text'>
            {loading ? 'Loading...' : 'Generate Names'}
          </h1>
        </button>

        {/* Results */}
        {/* Show results incase names > 0, else show placeholder div */}
        {names.length > 0 ? (
          <div
            className={`flex flex-col items-center w-[60%] space-y-8 mt-10 mb-10`}
          >
            {/* Title */}
            <h1 className='tracking-wide font-extrabold text-center text-text text-2xl md:text-3xl lg:text-4xl'>
              Here are your results!
            </h1>

            {/* Grid with buttons, 3 per row (allign center so that if length of names is longer than 3 then it shows 2 rows) */}
            <div className='flex flex-col items-center space-y-6 sm:w-[80%] md:w-[80%] lg:w-[70%]'>
              <div className='flex flex-row items-center justify-center space-x-6'>
                {names.map((name, index) => {
                  if (index < 3) {
                    return <Button title={name} notify={notify} />
                  } else {
                    return null
                  }
                })}
              </div>
              <div
                className={`${
                  names.length <= 3 ? 'hidden' : 'flex'
                } flex-row items-center justify-center space-x-6`}
              >
                {names.map((name, index) => {
                  if (index >= 3) {
                    return <Button title={name} notify={notify} />
                  } else {
                    return null
                  }
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className='mb-24'></div>
        )}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}
