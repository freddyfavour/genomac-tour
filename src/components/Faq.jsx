import { useState } from 'react'

export default function Faq() {
  const faqs = [
    {
      q: 'Is there a cost for institutions to participate in the tour?',
      a: `No. Institutions do not pay any participation or hosting fees.

The tour operates under an institutional scholarship-backed scientific development support model, where institutions receive structured access to high-value learning, research, and digital infrastructure at no institutional cost. Students only provide a symbolic commitment contribution when enrolling into supported programs.`,
    },
    {
      q: "What exactly is 'Institutional Scholarship-Backed Scientific Development Support'?",
      a: 'This is some subtext which appears after expanding the accordian.',
    },
    { q: 'What does my institution gain from participating?', a: 'This is some subtext which appears after expanding the accordian.' },
    { q: 'Who should attend the sessions during the tour visit?', a: 'This is some subtext which appears after expanding the accordian.' },
    { q: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', a: 'This is some subtext which appears after expanding the accordian.' },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/2 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-4 leading-7">
            Can't able to find answers you're looking for?
            <br />
            Reach out to our{' '}
            <a href="#" className="text-sky-600 underline">
              customer support
            </a>{' '}
            team.
          </p>
        </div>

        <div className="md:w-1/2 max-w-xl w-full divide-y divide-gray-200">
          {faqs.map((item, idx) => (
            <div key={idx} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                className="w-full flex items-start justify-between text-left gap-4"
              >
                <span className="font-semibold text-gray-900">{item.q}</span>

                <svg
                  className={`ml-4 h-5 w-5 text-gray-400 transform transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {openIndex === idx && (
                <div className="mt-3 text-gray-500 whitespace-pre-wrap">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
