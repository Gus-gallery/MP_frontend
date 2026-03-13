import { Link } from 'react-router-dom';
import TextParticles from './HeroText';

const Hero = () => {
  return (
    <div className="items-center flex flex-col mx-auto py-20">
      <div>
        <video className="absolute top-0 z-0 left-0 w-full h-full opacity-100 object-cover" autoPlay playsInline loop muted>
          <source src="/bg_vid_4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>   

      <div  className="text-5xl text-neutral-50 z-10 text-center md:max-w-1/2 opacity-100 pb-20 font-regular">
        <h1 className="mb-4 ">
            KATLA IS A CELEBRATION OF CRAFTS AND CULTURE.
        </h1>       
        <h2> 
          WE SELL HANDCRAFTED PRODUCTS AND TELL STORIES.
        </h2>
        <p className="py-4">
          <Link to="/stories" className="text-neutral-50 hover:bg-sky-900 bg-sky-950 px-3 p-1 rounded-lg pt-2 transition-all text-lg mt-4 shadow-md inline-block">
            Read about our artisans
          </Link>
        </p>
        <p>
          <Link to="/shop" className="text-neutral-50 hover:bg-sky-900 bg-sky-950 px-3 p-1 rounded-lg pt-2 transition-all text-lg mt-4 shadow-md inline-block">
            Explore the shop
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Hero