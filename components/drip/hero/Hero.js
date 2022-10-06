
import { Link } from 'react-router-dom'


const navigation = [
  { name: 'Product', to: '#' },
  { name: 'Features', to: '#' },
  { name: 'Marketplace', to: '#' },
  { name: 'Company', to: '#' },
]

function Hero() {
  return (
    <div className="relative overflow-hidden font-[roboto] bg-gradient-to-b from-blue-400">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full  lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full  w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 bg-gradient-to-b from-blue-400 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The World's<br/> Fastest Growing</span>{' '}
                <span className="block text-blue-600 xl:inline">Crypto Investment</span>
              </h1>
              <p className="mt-3 text-base text-white-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Live demo
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 bg-gradient-to-r from-blue-400 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://codeo.vercel.app/_nuxt/img/hero-image.15eeae4.webp"
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
