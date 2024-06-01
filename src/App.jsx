import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import SmallCard from './SmallCard'
import BgChanger from './BgChanger'
import PasswordGenerator from './PasswordGenerator'
import CurrencyConvertor from './CurrencyConvertor'

function App() {


  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-4 grid-rows-3 gap-2 '>
        <div className="hover:bg-red-500 bg-red-700 rounded-2xl  text-white">
          <SmallCard projectName='Counter'>
            <Counter />
          </SmallCard>
        </div>
        <div className="bg-yellow-700 hover:bg-yellow-500 row-start-2 rounded-2xl row-span-2">
          <SmallCard />
        </div>
        <div className="col-span-3 row-span-3" >
          <BgChanger className="rounded-2xl" />
        </div>
      </div>
      <div className='w-full px-3 py-2 bg-pink-300 mt-2 rounded-2xl'>
          <PasswordGenerator/>
      </div>
      <div className='w-full px-3 py-2 bg-amber-300 mt-2 rounded-2xl'>
          <CurrencyConvertor/>
      </div>
    </div>
  )
}

export default App
