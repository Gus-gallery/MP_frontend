import React from 'react'
import ProductCard from './ProductCard'
import products from '../products'

const Products = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center px-1 -mt-1"> 
        {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}

export default Products