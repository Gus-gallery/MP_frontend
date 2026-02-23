import React from 'react'
import ProductCard from './ProductCard'
import products from '../products'

const Products = () => {
  return (
    <div className="flex flex-col gap-4">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}

export default Products