import React from 'react'
import ProductCard from './ProductCard'
import products from '../products'

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-start mb-12 mt-2"> 
        {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}

export default Products