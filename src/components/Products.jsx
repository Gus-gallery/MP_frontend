import React from 'react'
import ProductCard from './ProductCard'
import products from '../products'

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-2 justify-start mb-12"> 
        {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}

export default Products