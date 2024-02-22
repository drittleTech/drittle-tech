import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <svg width="140" height="auto" viewBox="0 0 120 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.7482 17L52.4277 0.687012H91.4159C91.858 0.687012 92.185 1.09848 92.0852 1.52914L88.623 16.4681C88.5508 16.7795 88.2734 17 87.9537 17H48.7482Z" fill="#0057AA" />
                    <path d="M0.228784 14L2.12548 3.25453H5.58676C7.00374 3.25453 8.1083 3.70226 8.90044 4.59772C9.69257 5.48825 9.95087 6.71827 9.67535 8.28778L9.55727 8.95937C9.28174 10.5338 8.58801 11.7687 7.47607 12.6642C6.36905 13.5547 5.10705 14 3.69006 14H0.228784ZM2.46496 12.4871H3.92623C4.8266 12.4871 5.60398 12.1894 6.25835 11.5941C6.91272 10.9938 7.33831 10.1279 7.53511 8.99627L7.66795 8.25826C7.86476 7.12664 7.74176 6.26316 7.29895 5.66783C6.86106 5.0725 6.19193 4.77484 5.29155 4.77484H3.82291L2.46496 12.4871ZM11.3498 14L12.7151 6.24348H14.5232L14.4199 7.14386H14.4568C14.6782 6.84374 14.9537 6.58297 15.2834 6.36157C15.613 6.14016 15.9673 6.02946 16.3461 6.02946C16.4494 6.02946 16.5527 6.04176 16.6561 6.06636C16.7643 6.09096 16.8381 6.1131 16.8775 6.13278L16.5823 7.81545C16.4986 7.79577 16.4051 7.78101 16.3018 7.77117C16.2034 7.76133 16.0927 7.75641 15.9697 7.75641C15.6007 7.75641 15.2563 7.86219 14.9365 8.07376C14.6216 8.2804 14.3682 8.54362 14.1763 8.86343L13.276 14H11.3498ZM17.6663 14L19.0316 6.24348H20.9578L19.5925 14H17.6663ZM19.253 4.02207C19.3022 3.72194 19.4424 3.47102 19.6737 3.26929C19.9049 3.06265 20.205 2.95933 20.574 2.95933C20.943 2.95933 21.2087 3.06265 21.3711 3.26929C21.5334 3.47102 21.5876 3.72194 21.5334 4.02207C21.4793 4.32219 21.3342 4.57558 21.098 4.78222C20.8668 4.98394 20.5691 5.0848 20.205 5.0848C19.836 5.0848 19.5703 4.98394 19.408 4.78222C19.2456 4.57558 19.1939 4.32219 19.253 4.02207ZM22.6543 7.66047L22.9053 6.24348H27.5769L27.326 7.66047H22.6543ZM23.1562 11.8155L24.0049 7.00364L24.0566 6.78961L24.4772 4.36893H26.3813L25.0824 11.7786C25.0184 12.1328 25.0406 12.3788 25.1488 12.5166C25.2571 12.6544 25.4391 12.7232 25.695 12.7232C25.818 12.7232 25.941 12.7109 26.064 12.6863C26.187 12.6568 26.3124 12.6199 26.4403 12.5756L26.1894 13.9926C26.0615 14.0517 25.8893 14.1033 25.6728 14.1476C25.4563 14.1919 25.2226 14.214 24.9717 14.214C24.2976 14.214 23.7884 14.0221 23.444 13.6384C23.1045 13.2546 23.0086 12.647 23.1562 11.8155ZM28.5502 7.66047L28.8011 6.24348H33.4727L33.2218 7.66047H28.5502ZM29.052 11.8155L29.9007 7.00364L29.9524 6.78961L30.3731 4.36893H32.2771L30.9782 11.7786C30.9143 12.1328 30.9364 12.3788 31.0447 12.5166C31.1529 12.6544 31.3349 12.7232 31.5908 12.7232C31.7138 12.7232 31.8368 12.7109 31.9598 12.6863C32.0828 12.6568 32.2083 12.6199 32.3362 12.5756L32.0853 13.9926C31.9573 14.0517 31.7851 14.1033 31.5686 14.1476C31.3522 14.1919 31.1185 14.214 30.8675 14.214C30.1935 14.214 29.6843 14.0221 29.3398 13.6384C29.0004 13.2546 28.9044 12.647 29.052 11.8155ZM34.3574 14L36.3501 2.70102H38.2763L36.2837 14H34.3574ZM39.4489 10.2361L39.4931 9.99997C39.7047 8.81423 40.2213 7.85481 41.043 7.12172C41.8695 6.38863 42.8339 6.02208 43.936 6.02208C45.043 6.02208 45.845 6.36649 46.3419 7.0553C46.8388 7.73919 46.984 8.67893 46.7773 9.87451L46.6445 10.583H40.6592L40.8806 9.31362H44.9618L44.9987 9.14388C45.0824 8.67155 45.0135 8.27302 44.7921 7.94829C44.5756 7.61865 44.2115 7.45383 43.6998 7.45383C43.0897 7.45383 42.5903 7.68261 42.2016 8.14018C41.813 8.59283 41.5547 9.1857 41.4267 9.91879L41.3603 10.3099C41.2275 11.0381 41.2865 11.631 41.5374 12.0885C41.7884 12.5412 42.2459 12.7675 42.9101 12.7675C43.348 12.7675 43.7441 12.6642 44.0983 12.4576C44.4575 12.246 44.7601 12.0024 45.0061 11.7269L46.1795 12.6273C45.8548 13.0652 45.3849 13.4416 44.7699 13.7565C44.1549 14.0664 43.4587 14.2214 42.6814 14.2214C41.4415 14.2214 40.5387 13.8549 39.9728 13.1218C39.412 12.3887 39.2373 11.4268 39.4489 10.2361ZM54.9805 7.48335L55.2019 6.25086H59.7407L59.5193 7.48335H54.9805ZM55.5045 11.9483L56.3901 6.9446L56.4344 6.73057L56.8477 4.34679H58.4787L57.1502 11.9336C57.0863 12.2829 57.1084 12.5289 57.2167 12.6716C57.3298 12.8143 57.5242 12.8856 57.7997 12.8856C57.9276 12.8856 58.0555 12.8733 58.1835 12.8487C58.3163 12.8192 58.4516 12.7798 58.5894 12.7306L58.3606 14C58.2277 14.059 58.0531 14.1107 57.8366 14.155C57.625 14.1993 57.3962 14.2214 57.1502 14.2214C56.5303 14.2214 56.0654 14.0394 55.7554 13.6753C55.4504 13.3063 55.3667 12.7306 55.5045 11.9483ZM60.8837 10.2435L60.928 10.0074C61.1346 8.83145 61.6365 7.87449 62.4335 7.13648C63.2306 6.39847 64.1679 6.02946 65.2454 6.02946C66.3278 6.02946 67.1027 6.37387 67.5701 7.06268C68.0424 7.75149 68.1753 8.68877 67.9686 9.87451L67.8579 10.5092H61.8874L62.094 9.33576H66.4262L66.4631 9.15864C66.5516 8.64203 66.4778 8.20414 66.2417 7.84497C66.0104 7.48581 65.6144 7.30622 65.0535 7.30622C64.3893 7.30622 63.8456 7.55715 63.4225 8.059C62.9993 8.56085 62.7214 9.198 62.5885 9.97045L62.5295 10.2804C62.3966 11.0479 62.463 11.6826 62.7287 12.1845C62.9944 12.6863 63.4913 12.9373 64.2195 12.9373C64.6869 12.9373 65.1051 12.8315 65.4741 12.6199C65.8481 12.4084 66.1679 12.1599 66.4336 11.8745L67.393 12.6716C67.0781 13.075 66.623 13.4342 66.0276 13.7491C65.4372 14.064 64.7632 14.2214 64.0055 14.2214C62.7902 14.2214 61.9145 13.8549 61.3782 13.1218C60.8419 12.3838 60.6771 11.4243 60.8837 10.2435ZM69.9382 10.2435L69.9825 10.0074C70.1892 8.82161 70.6885 7.86219 71.4807 7.1291C72.2728 6.39601 73.2396 6.02946 74.3811 6.02946C75.4389 6.02946 76.1966 6.30991 76.6541 6.8708C77.1117 7.42677 77.2815 8.06392 77.1634 8.78225L77.156 8.85605H75.5619L75.5766 8.79701C75.6455 8.39356 75.5693 8.0467 75.3479 7.75641C75.1314 7.46613 74.7304 7.32098 74.1449 7.32098C73.461 7.32098 72.91 7.57191 72.4918 8.07376C72.0735 8.57069 71.798 9.20292 71.6652 9.97045L71.6061 10.2804C71.4733 11.0479 71.525 11.6826 71.7611 12.1845C72.0022 12.6863 72.4672 12.9373 73.156 12.9373C73.7562 12.9373 74.2138 12.7897 74.5287 12.4945C74.8436 12.1943 75.0354 11.8475 75.1043 11.4539L75.1191 11.4022H76.7058L76.691 11.4539C76.568 12.1722 76.1769 12.8143 75.5176 13.3801C74.8583 13.941 73.9973 14.2214 72.9346 14.2214C71.798 14.2214 70.9616 13.8549 70.4253 13.1218C69.894 12.3887 69.7316 11.4293 69.9382 10.2435ZM78.6607 14L80.6533 2.69364H82.2917L81.4946 7.23242C81.8144 6.89786 82.1957 6.62725 82.6386 6.42061C83.0863 6.20904 83.5709 6.10326 84.0924 6.10326C84.8157 6.10326 85.3692 6.32959 85.753 6.78223C86.1417 7.22996 86.245 7.97289 86.0629 9.01103L85.1847 14H83.5463L84.4172 9.04793C84.5205 8.46736 84.4639 8.05408 84.2474 7.80807C84.0359 7.55715 83.6964 7.43169 83.229 7.43169C82.8206 7.43169 82.4442 7.54239 82.0998 7.76379C81.7603 7.98027 81.475 8.27056 81.2437 8.63465L80.2991 14H78.6607Z" fill="white" />
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">We are MSME Registered IT Services company, We do freelance IT projects, also hire interns, full time developers and designers.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Services</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">UI UX Designing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Development</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Graphic Designing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out ">Mobile Apps</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Quick Links</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Home</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#projects" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Projects</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/contactus" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Talk to us!</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Emails</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="mailto:internship@drittletech.in?subject=Regarding%20" target='_blank' className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">internship@drittletech.in</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="mailto:drittletech@gmail.com?subject=Regarding%20" target='_blank' className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">drittletech@gmail.com</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="https://twitter.com/DrittleTech" target='_blank' className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://github.com/drittleTech" target='_blank' className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://www.facebook.com/drittleTech" target='_blank' className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://www.instagram.com/drittletech/" target='_blank' className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://www.linkedin.com/company/drittle-tech/" target='_blank' className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy;Drittle tech @2024</div>
          </div>

        </div>
      </div>
    </footer>
  )
}
