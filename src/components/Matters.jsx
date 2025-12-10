import matters from '../assets/matters.svg'

export default function Matters() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl max-md:text-3xl text-gray-900">Why this Tour Matters</h2>

            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              Science is changing faster than education. Genomics, bioinformatics, computational biology, and
              artificial intelligence are quietly becoming the backbone of modern healthcare, agriculture, public health,
              biotechnology, and innovation.
            </p>

            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              Yet, many institutions still rely on outdated tools, fragmented research systems, and curricula that do not
              fully prepare students for this new reality.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div>
              <img src={matters} alt="Why this tour matters illustration"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
