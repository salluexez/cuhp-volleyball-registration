const categories = [
    {
        title: 'Undergraduate Students',
        desc: 'Currently enrolled in any UG program at CUHP.',
        icon: 'school',
        color: 'from-primary-500 to-blue-600',
    },
    {
        title: 'Postgraduate Students',
        desc: "Enrolled in Master's degree across all science departments.",
        icon: 'menu_book',
        color: 'from-violet-500 to-purple-600',
    },
    {
        title: 'PhD Scholars',
        desc: 'Research scholars affiliated with the Shahpur Campus.',
        icon: 'biotech',
        color: 'from-cyan-500 to-teal-600',
    },
]

export default function Eligibility() {
    return (
        <section id="eligibility" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-primary-50 text-primary-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                        Eligibility
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Who Can{' '}
                        <span className="text-gradient">Participate?</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        All students currently enrolled at the Central University of Himachal Pradesh, Shahpur Campus are eligible to compete.
                    </p>
                </div>

                {/* Category cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                        <div
                            key={cat.title}
                            className="group relative bg-white rounded-2xl border border-gray-100 hover:border-primary-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Top gradient line */}
                            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cat.color} rounded-t-2xl`} />

                            {/* Icon */}
                            <div className={`w-14 h-14 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <span className="material-icons text-white text-2xl">{cat.icon}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{cat.desc}</p>

                            {/* Hover glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${cat.color} transition-opacity duration-300 rounded-2xl`} />
                        </div>
                    ))}
                </div>

                {/* Info note */}
                <div className="mt-10 flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <span className="material-icons text-amber-500 mt-0.5 flex-shrink-0">info</span>
                    <div>
                        <p className="font-semibold text-amber-800 mb-1">University Email Required</p>
                        <p className="text-amber-700 text-sm leading-relaxed">
                            Participants must use their official CUHP university email for registration verification.
                            Registration deadline is <strong>February 20, 2026</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
