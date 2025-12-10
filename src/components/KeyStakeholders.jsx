import React from 'react'
import crown from '../assets/crown.svg'
import bio from '../assets/bio.svg'
import flash from '../assets/flash.svg'
import book from '../assets/book.svg'

const cards = [
  {
    icon: crown,
    title: 'Leadership',
    items: ['Vice-Chancellors / Rectors / Provosts', 'Deans, Directors, HODs', 'Academic Planning Units']
  },
  {
    icon: bio,
    title: 'Research & Faculty',
    items: ['Research coordinators & centre directors', 'Lecturers, supervisors & research fellows', 'Laboratory scientists']
  },
  {
    icon: flash,
    title: 'Innovation Unit',
    items: ['Innovation & entrepreneurship units', 'Tech-driven units', 'ICT/eLearning teams']
  },
  {
    icon: book,
    title: 'Students',
    items: ['Undergraduate students', 'Postgraduate students', 'Final-year research students']
  }
]

export default function KeyStakeholders() {
  return (
    <section id="who-should-join" className="bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Key Stakeholders We Engage</h3>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">Within each institution, we work with multiple stakeholder groups to ensure comprehensive transformation</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-center">
                  <img src={c.icon} alt="icon" className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{c.title}</h4>
                  <ul className="mt-3 text-xs text-gray-600 space-y-2">
                    {c.items.map((it, idx) => (
                      <li key={idx} className="leading-snug">• {it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
