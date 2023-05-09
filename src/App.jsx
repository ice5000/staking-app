import React from 'react'
import Staking from './Component/Staking'
import Postion from './Component/Postion'
import Footer from './Component/Footer'
const App = () => {
  return (
    <div>
      <div className='space-y-5'>
      <Staking />
      <Postion />
      <Footer />
      </div>
    </div>
  )
}

export default App
