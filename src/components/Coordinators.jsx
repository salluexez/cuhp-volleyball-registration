const coordinators = [
    {
        name: 'Dr. Pankaj Kumar',
        role: 'Event Coordinator',
        department: 'Department of Mathematics',
        initials: 'PK',
        color: 'from-primary-500 to-blue-600',
        email: 'pkumar240183@gmail.com',
    },
    {
        name: 'Mr. Manoj Dhiman',
        role: 'Event Coordinator',
        department: 'Department of CSI',
        initials: 'MD',
        color: 'from-violet-500 to-purple-600',
        email: 'manojdhiman.it@gmail.com',
    },
]

export default function Coordinators() {
    return (
        <section id="contact" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block bg-primary-50 text-primary-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                        Organizing Team
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Event{' '}
                        <span className="text-gradient">Coordinators</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Reach out to our organizing team for any queries regarding the event.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {coordinators.map((c) => (
                        <div
                            key={c.name}
                            className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
                        >
                            {/* Color strip */}
                            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${c.color} rounded-t-3xl`} />

                            {/* Avatar */}
                            <div className={`w-20 h-20 bg-gradient-to-br ${c.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                                <span className="text-white font-black text-2xl">{c.initials}</span>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-black text-gray-900 mb-1">{c.name}</h3>
                                <p className="text-primary-600 font-semibold text-sm mb-0.5">{c.role}</p>
                                <p className="text-gray-400 text-sm">{c.department}</p>
                            </div>

                            <a
                                href={`mailto:${c.email}`}
                                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${c.color} bg-clip-text text-transparent hover:underline transition-all`}
                            >
                                <span className="material-icons text-primary-500 text-base">alternate_email</span>
                                {c.email}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
