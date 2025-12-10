import React from 'react'
import mattersImg from '../assets/mle.svg'

export default function EngagementMatters() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Why Multi-Level Engagement Matters</h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              A True institutional transformation requires buy-in and participation from all levels of the academic ecosystem.
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Our comprehensive approach ensures that leadership sets the vision, faculty implements the tools, students
              gain the skills, and innovation teams commercialize the outcomes.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div>
              <img src={mattersImg} alt="engagement"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
