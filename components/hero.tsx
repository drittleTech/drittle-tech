import '../app/css/style.css'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative sm:mt-20 ">
        {/* Hero content */}
        <div className="relative pt-48 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 text-purple-600" data-aos="fade-up">Lost with a great idea?</h1>
            <h1 className="h1 mb-1" data-aos="fade-up">Let our expertise guide you.</h1>

            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Our team of experienced professionals is here to guide you through every step of the journey, from concept to execution.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 rounded-full relative flex items-center justify-center" href="/contactus">
                  <span className="mr-2">Let's Brainstorm</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-1"> {/* Added margin to the left side of the SVG */}
                    <path d="M5 12h13M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-60 hidden">
                <span className="inline-block animate-bounce rounded-full p-4  text-white text-sm items-center justify-center">
                  <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                  </svg>
                </span>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
