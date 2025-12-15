import React from 'react'
import bullseye from '../assets/bullseye.svg'
import world from '../assets/world.svg'
import stats from '../assets/stats.svg'

const leftCards = [
  {
    icon: bullseye,
    title: 'Leadership Strategy Roundtable',
    desc:
      'A closed door session with senior leadership (VC,DVC, Deans, Directors, HODs) focused on modernizing scientific education, research systems, digital transformation, and global competitiveness.'
  },
  {
    icon: world,
    title: 'Research & AI-powered Omics Workshop',
    desc:
      'Hands-on training for lecturers, researchers, live scientists, and students integrating genomics, bioinformatics, computational biology, AI-assisted research pipelines, and modern research-to-publication workflows.'
  },
  {
    icon: stats,
    title: 'Campus Flagship Impact Event',
    desc:
      'A high-energy, future-of-science event for 500 - 2,000+ students and staff, exploring global career pathways in genomics, bioinformatics, data science, omics technologies, and AI-powered research.'
  }
]

const rightBullets = [
  'Access to professional genomics & bioinformatics programs.',
  'Computational biology & AI-driven research training.',
  'Research-to-publication systems.',
  'Cloud-based bioinformatics tools',
  'Advanced virtual lab environments',
  'Digital research management tools',
  'Scientific writing & project execution support',
  'Access to international scientific communities'
]

export default function DuringTour() {
  return (
    <section id="process" className="bg-white">
      <div className="max-w-6xl mx-auto py-20">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">What Happens During the Tour</h3>
          <p className="mt-2 text-sm text-gray-500">A high-impact, 3-part experience designed for meaningful institutional transformation</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {leftCards.map((c, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center justify-center">
                    <img src={c.icon} alt="icon" className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{c.title}</h4>
                    <p className="mt-2 text-sm text-gray-500">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">High-Institutional Scholarship-Backed Scientific Development Support</h4>
                <p className="mt-3 text-sm text-gray-600">Partner institutions can join the Genomac program, giving their students and researchers access to advanced scientific opportunities and digital research tools.</p>

                <ul className="mt-4 space-y-3">
                  {rightBullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="flex items-center justify-center mt-1">
                        <img src={bullseye} alt="bullet" className="w-8 h-8" />
                      </span>
                      <span className="text-sm text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href="https://forms.gle/6ZJwvAsb4f3qUh3Q9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B241B7] text-white text-sm font-medium shadow"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
