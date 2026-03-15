import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col p-8 h-screen">
      <Link to="stories">
      <div className="border-b-2 border-zinc-300 shadow-md">
        <video className="absolute top-0 z-0 left-0 w-full h-screen opacity-100 object-cover" autoPlay playsInline loop muted>
          <source src="/bg_vid_4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>   

      <div  className="text-2xl md:text-3xl lg:text-4xl flex-col text-neutral-50 z-1 absolute text-left max-w-2/3 xl:max-w-1/3 opacity-100 font-basker-medium -mt-2">
        <h1 className="mb-4">
            Katla celebrates crafts and culture, selling handmade products and telling stories.
        </h1>
      </div>
      </Link>
    </div>
  )
}

export default Hero