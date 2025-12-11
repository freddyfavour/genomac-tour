import React from 'react'
import street from '../assets/street.svg'
import doc from '../assets/doc.svg'
import video from '../assets/video.svg'
import refresh from '../assets/refresh.svg'

const steps = [
  {
    title: 'Expression of interest (EOI) Submission',
    desc: 'Institution submit an online EOI form to express interest in hosting the tour.',
    icon: doc
  },
  {
    title: 'Introductory Strategy Meeting',
    desc: 'A virtual call with your leadership team to discuss objective and alignment.',
    icon: video
  },
  {
    title: 'Tour Date & Structure Confirmation',
    desc: 'We plan the Roundtable, Student Event, and workshop schedule together.',
    icon: doc
  },
  {
    title: 'MoU & Partnership Agreement',
    desc: 'A simple collaboration agreement is signed to formalize the partnership.',
    icon: doc
  },
  {
    title: 'Per-Tour Mobilization',
    desc: 'Material shared, student and staff announcement begins on campus.',
    icon: refresh
  },
  {
    title: 'Tour Delivery',
    desc: 'Leadership session, open lecture and workshop delivery.',
    icon: doc
  },
  {
    title: 'Integration & Follow-UP',
    desc: 'Omicsboard onboarding, dashboards, student access, and joint initiative begin.',
    icon: refresh
  }
]

export default function HowToJoin() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">How Your Institution can Join</h2>
            <p className="mt-2 text-sm text-gray-600">A simple straightforward process to become a partner institution</p>

            <div className="mt-6">
              <img src={street} alt="campus street" className="w-full max-w-md rounded shadow" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {steps.map((s, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">{idx + 1}</div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <img src={s.icon} alt="icon" className="w-5 h-5 mt-1" />
                      <h4 className="text-md font-semibold text-gray-900">{s.title}</h4>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6">
                <a
                  href="https://forms.gle/6ZJwvAsb4f3qUh3Q9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B241B7] text-white text-sm font-medium shadow"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
