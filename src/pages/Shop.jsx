import Header from '../components/Header'
import Products from '../components/Products'

const Shop = () => {
  return (
    <div className=''>
    <header className="top-0 sticky z-10">
        <Header />
    </header>
    <div className='container mx-auto lg:py-16'>
      <Products />
    </div>
    </div>
  )
}

export default Shop