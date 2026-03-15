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
        <h1 className="text-left font-basker-regular text-xl md:text-2xl text-neutral-700 md:max-w-xl pb-8">
          Explore our selection of handcrafted products. Made by hand, the selected products celebrate individual artisans and sustainable practices.
        </h1>
      </div>
      <Products />
    </div>
    </div>
  )
}

export default Shop