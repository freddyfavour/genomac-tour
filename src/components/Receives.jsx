import React from 'react'
import shield from '../assets/shield.svg'
import buildings from '../assets/buildings.svg'
import growth from '../assets/growth.svg'

const features = [
  {
    icon: shield,
    title: 'Modernize Education & Research',
    desc: 'Update science education and research systems to meet global standards'
  },
  {
    icon: buildings,
    title: 'Globally Relevant Skills',
    desc: 'Equip student and staff with skills demanded by modern science and industry.'
  },
  {
    icon: growth,
    title: 'Publication Pipeline',
    desc: 'Build sustainable systems for publications, innovation, and commercialization.'
  },
  {
    icon: shield,
    title: 'Host Advanced Programs',
    desc: 'Manage courses, certificates, diplomas and research tracks independently'
  },
  {
    icon: buildings,
    title: 'Complete Research Lifecycle',
    desc: 'Run project from ideation to analysis and publication with modern tools'
  },
  {
    icon: growth,
    title: 'Innovation & Startups',
    desc: 'Build translational innovations and startups from institution research'
  }
]

export default function Receives() {
  return (
    <section id="what-you-receive" className="bg-white">
      <div className="max-w-6xl mx-auto py-20">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">What your institution Receives</h3>
          <p className="mt-2 text-xl text-gray-500">The Digital Science Infrastructure You Get to Lead the Next Era.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-center">
                  <img src={f.icon} alt="icon" className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h4 className="text-md font-semibold text-gray-900">{f.title}</h4>
                  <p className="mt-2 text-sm text-gray-500">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
