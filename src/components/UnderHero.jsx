import { Link } from 'react-router-dom';

const UnderHero = () => {
  return (
    <div>
        <div className="z-10 items-center font-light flex flex-row gap-4">
            <p className="font-light">
              <Link to="/stories" className="text-neutral-50 hover:bg-sky-900 bg-sky-950 px-3 p-1 rounded-lg pt-2 transition-all text-lg shadow-md inline-block">
                Read about our artisans
              </Link>
            </p>
            <p>
              <Link to="/shop" className="text-neutral-50 hover:bg-sky-900 bg-sky-950 px-3 p-1 rounded-lg pt-2 transition-all text-lg shadow-md inline-block">
                   Explore the shop
              </Link>
            </p>
        </div>
    </div>
  )
}

export default UnderHero