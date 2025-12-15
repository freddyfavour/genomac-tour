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
      a: 'This is a sponsored partnership model where Genomac provides partner institutions with ongoing access to advanced genomics and bioinformatics resources, training programs, cloud tools, virtual labs, and research support at no cost to the institution itself. It enables students, lecturers, and researchers to enroll in professional programs, access digital infrastructure (such as Omicsboard dashboards, bioinformatics tools, and virtual labs), receive mentorship for research-to-publication workflows, and connect to international scientific networks. The support is "scholarship-backed" meaning high-value opportunities are subsidized for the institution, with participants contributing only a minimal symbolic fee where applicable to demonstrate commitment.',
    },
    {
      q: 'What does my institution gain from participating?',
      a: 'Your institution gains comprehensive modernization of its science education and research systems, including updated curricula aligned with global standards, hands-on training in AI-driven omics and bioinformatics, sustainable publication and innovation pipelines, independent management of advanced programs, cloud-based tools and virtual labs, support for translational research and startups, and long-term partnership benefits like onboarding to digital platforms, staff development, and enhanced global competitiveness—all provided through a no-cost institutional partnership.',
    },
    {
      q: 'Who should attend the sessions during the tour visit?',
      a: 'The tour includes targeted sessions for different groups: The Leadership Strategy Roundtable is for senior leadership (Vice-Chancellors, Deans, Directors, HODs, etc.). The Research & AI-powered Omics Workshop is ideal for lecturers, researchers, lab scientists, postgraduate students, and supervisors. The Campus Flagship Impact Event is open to all—undergraduates, postgraduates, staff, and final-year students—to inspire broader engagement with future careers in genomics, bioinformatics, data science, and AI-powered research. Multi-level participation ensures full institutional transformation.',
    },
    {
      q: 'How can my institution express interest in hosting the Genomac Strategic Genomics and Bioinformatics Innovation Tour 2026?',
      a: 'Your institution can submit an Expression of Interest (EOI) through the online form on the tour registration page. This starts the straightforward partnership process, including an introductory strategy meeting, tour planning, MoU signing, and post-tour integration support with digital tools and ongoing programs.',
    },
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
            <a href="https://www.genomacholdings.com/contact" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">
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
