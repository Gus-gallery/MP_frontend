import React from 'react'
import products from '../products'
import ProductCard from './ProductCard'

const Hero = () => {
  return (
    <div className="items-center flex flex-col container mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl text-center mt-2 mb-2">
            Market Project
        </h1>
        <h2 className='font-light text-lg lg:text-xl text-center mb-2'>
            A curated marketplace for items made with passion.
        </h2>

        <div className='flex flex-row flex-wrap justify-left px-1 -mt-1'>
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

    </div>
  )
}

export default Hero