import footerImg from '../assets/footer.png'
import downloadIcon from '../assets/download.svg'
import calendarIcon from '../assets/calendar.svg'

export default function FooterCta() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(124,58,237,0.85)] via-[rgba(124,58,237,0.7)] to-[rgba(99,102,241,0.6)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 text-center text-white">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Join the Scientific Transformation Movement and</h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3">transform your institution</h2>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-white/80 mt-6 leading-7">
          The Genomac Strategic Genomics, Bioinformatics & Innovation Tour 2026 is more than an event — it is a scientific transformation
          agenda designed to elevate institutions into the future of global science. Your institution has the opportunity to give its
          students and staff access to world-class scientific development support, high-value training, modern research infrastructure,
          and a global innovation ecosystem.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8">
          <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-4 min-w-[140px]">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-xs text-white/80">Target Institutions</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-4 min-w-[100px]">
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-white/80">Continents</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-4 min-w-[120px]">
            <div className="text-2xl font-bold">7</div>
            <div className="text-xs text-white/80">Core Programs</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-4 min-w-[140px]">
            <div className="text-2xl font-bold">100K+</div>
            <div className="text-xs text-white/80">Students & Staff</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="https://www.genomacholdings.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-purple-700 font-medium rounded-full px-6 py-3 shadow-sm"
          >
            Become a Partner Institution
            <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>


        <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>Powered by Omicsboard — The Global Omics Operating System</div>
          <div className="flex items-center gap-4">
            <a href="https://www.genomacholdings.com/contact" target="_blank" rel="noopener noreferrer" className="text-white/80">Contact Us</a>
            <a href="#" className="text-white/80">Partnership Terms</a>
            <a href="#" className="text-white/80">Privacy Policy</a>
            <a href="#" className="text-white/80">About Genomac</a>
          </div>
        </div>
      </div>
    </section>
  )
}
