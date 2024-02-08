function HeroSection() {
  return (
    <>
      <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
        <div className="container mx-auto text-center">
          <div
            className="text-6xl flex justify-center font-bold md:px-20 pb-10
    text-blue-500


            
            "
          >
           Organize, collaborate, and sell with ease
          </div>

          <p
            className="text-lg md:text-xl md-10
            bg-gradient-to-r
            from-black
            to-gray-400
            bg-clip-text
            text-transparent
            font-bold
            
            "
          >
           No matter what you organize, Filey provides everything you need to run your digital store of folders
          </p>
          <div className="flex gap-4 justify-center pt-10">
            <button className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">
              Get Started
            </button>
            <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">
              Learn More
            </button>
          </div>

        </div>
          <div className="pt-10 px-14">
            <video className="rounded-xl" autoPlay muted loop>
              <source src="/video/videohero.mp4" type="video/mp4" />
            </video>
          </div>
      </section>
    </>
  );
}

export default HeroSection;
