import bg from '../assets/background.png'
import arrow from '../assets/arrow.svg'

export default function Hero() {
  return (
    <section
      id="why-join"
      className="relative bg-cover min-h-screen bg-center"
      style={{ backgroundImage: `url(${bg})` }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/75 via-purple-800/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 lg:py-44 text-center text-white">
        <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block">THE GENOMAC STRATEGIC</span>
          <span className="block">GENOMICS AND BIOINFORMATICS</span>
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#C7FF4D] to-[#18E06F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            INNOVATION TOUR 2026
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          A global movement empowering universities, research institutes, and teaching hospitals with advanced genomics,
          bioinformatics, computational biology, and AI-driven infrastructure.
        </p>

        <div className="mt-8 flex max-md:flex-col justify-center gap-4">
          <a
            href="https://forms.gle/6ZJwvAsb4f3qUh3Q9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center max-md:justify-center gap-3 rounded-full px-6 py-1 bg-[#B241B7] text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            <span>Become a Partner Institute</span>
            <img src={arrow} alt="arrow" className="w-10 h-10" />
          </a>

          <a
            href="https://forms.gle/6ZJwvAsb4f3qUh3Q9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center max-md:justify-center gap-3 rounded-full px-6 py-1 border border-white/30 text-white bg-black/20 font-medium hover:bg-white/5 transition"
          >
            <span>Request Tour Enquiry</span>
            <img src={arrow} alt="arrow" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  )
}
