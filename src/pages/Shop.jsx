import Header from '../components/Header'
import Products from '../components/Products'

const Shop = () => {
  return (
    <div className=''>
    <header className="top-0 sticky z-10">
        <Header />
    </header>
    <div className="p-8">
      <div>
        <h1 className="text-5xl lg:text-6xl font-regular text-left -mb-1 text-neutral-900">
          KATLA SHOP
        </h1>
        <p className="text-left font-basker-regular text-xl md:text-2xl text-neutral-700 md:max-w-2xl mb-8">
          Explore our curated selection of handcrafted products. Our collection celebrates individual artists, while supporting sustainable and ethical practices.
        </p>
      </div>
      <Products />
    </div>
    </div>
  )
}

export default Shop