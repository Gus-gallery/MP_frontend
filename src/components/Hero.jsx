
const Hero = () => {
  return (
    <div className="flex flex-col p-8 h-screen">
      <div className="border-b-2 border-zinc-300 shadow-md">
        <video className="absolute top-0 z-0 left-0 w-full h-screen opacity-100 object-cover" autoPlay playsInline loop muted>
          <source src="/bg_vid_4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>   

      <div  className="text-3xl md:text-4xl lg:text-5xl flex-col text-neutral-50 z-1 text-left md:max-w-2/3 lg:max-2-1/2 opacity-100 font-regular">
        <h1 className="mb-4">
            KATLA IS A CELEBRATION OF CRAFTS AND CULTURE.
        </h1>       
        <h2> 
          WE SELL HANDCRAFTED PRODUCTS AND TELL STORIES.
        </h2>
      </div>
    </div>
  )
}

export default Hero