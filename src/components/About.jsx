const cards = [
    {
        icon: 'science',
        title: 'Scientific Thinking',
        desc: 'Sports cultivate the analytical mindset that drives breakthrough discoveries in science.',
        color: 'from-primary-500 to-blue-600',
    },
    {
        icon: 'fitness_center',
        title: 'Physical Health',
        desc: 'A healthy body is the foundation of a healthy mind — the core principle guiding our event.',
        color: 'from-violet-500 to-purple-600',
    },
]

export default function About() {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-primary-50 text-primary-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                        About the Event
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                        Integrating Academic Excellence
                        <br />
                        <span className="text-gradient">with Athletic Spirit</span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        National Science Day is celebrated in India on{' '}
                        <strong className="text-gray-900">28 February</strong> each year to mark the discovery
                        of the <strong className="text-gray-900">Raman Effect</strong> by Indian physicist Sir C. V. Raman.
                        At the Central University of Himachal Pradesh, we believe that a healthy mind resides in a healthy body.
                    </p>
                </div>

                {/* Main content card */}
                <div className="bg-gradient-to-br from-primary-950 to-gray-900 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden shadow-2xl">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                            <span className="material-icons text-primary-300 text-sm">info</span>
                            <span className="text-primary-300 text-sm font-medium">Our Philosophy</span>
                        </div>
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
                            Our 2026 celebrations uniquely integrate scientific temperament with physical excellence.
                            Through these sports activities, we aim to foster{' '}
                            <span className="text-primary-300 font-semibold">team spirit</span>,{' '}
                            <span className="text-primary-300 font-semibold">discipline</span>, and the analytical
                            thinking required in both science and competitive sports.
                        </p>
                    </div>
                </div>

                {/* Feature cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="group relative rounded-2xl p-8 border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Color bar on hover */}
                            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.color} rounded-t-2xl`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg`}>
                                <span className="material-icons text-white text-2xl">{card.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
