import React from 'react'
import ProductCard from './ProductCard'
import products from '../products'

const Products = () => {
  return (
    <div className="flex flex-row flex-wrap justify-left px-2"> 
        {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}

export default Products