import React from 'react'

function Footer() {
  return (
   <div className='flex items-center justify-center text-center '>
     <div className="border-[1px] w-[700px] h-[100px] text-center flex justify-center items-center flex-col space-y-5">
      <div className="text-center text-purple-900 font-semibold ">Staked Position</div>
      <div className='text-[#8791A5] text-xs'>You haven't staked yet!!</div>
    </div>
   </div>
  )
}

export default Footer
