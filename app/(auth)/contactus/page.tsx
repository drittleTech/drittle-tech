

export default function ContactUs() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-16" data-aos="fade-up" data-aos-delay="200">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Tell us about your project & we will get back to you in 12 hours.</p>
        <form className="space-y-6">
        <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What shall we call you?</label>
            <input type="text" id="subject" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 text-white placeholder-purple-400" placeholder="Let us know how we can help you" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" id="email" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 text-white placeholder-purple-400" placeholder="name@flowbite.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
          </div>
          <div className="sm:col-span-2">
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What services would like to request?</label>
            <textarea id="message" className="block w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 text-white placeholder-purple-400 " rows={6} placeholder="Leave a comment..."></textarea>
          </div>
          <div >
            <a className="btn text-purple-700 bg-gray-100 hover:bg-white w-full mb-4 sm:w-auto sm:mb-0 rounded" href="#0">Submit 🚀</a>
          </div>        
          </form>
      </div>
    </section>
  )
}
