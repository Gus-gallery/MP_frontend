import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-8'>
        <h1 className='font-basker-regular text-xl text-primary'>
            Join the newsletter to hear about new products and offers!
        </h1>
    <input placeholder="Your e-mail..." className="px-2 border border-neutral-500 p-1 font-basker-regular text-xl">
        
    </input>
    </div>
  )
}

export default Newsletter