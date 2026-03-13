import { Link } from 'react-router-dom';

const UnderHero = () => {
  return (
    <div className="-mt-20 mb-2">
      <div className="relative grid grid-cols-1 md:grid-cols-2 font-light gap-2 w-full justify-center">  
        
        <div
          className="relative h-120 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/artisans.png')" }}
        >
          <div className="absolute" />
          <Link to="/stories" className="absolute p-8 text-primary text-xl md:text-3xl">
            Read about our artisans
          </Link>
        </div>

        <div
          className="relative h-120 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/shop.png')" }}
        >
          <div className="absolute" />
          <Link to="/shop" className="absolute p-8 text-primary text-xl md:text-3xl">
            Explore the shop
          </Link>
        </div>

      </div>
    </div>
  )
}

export default UnderHero