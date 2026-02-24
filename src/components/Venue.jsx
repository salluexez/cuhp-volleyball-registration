const details = [
    { icon: 'location_on', label: 'Location', value: 'Main Playground, Shahpur Campus' },
    { icon: 'corporate_fare', label: 'Organizer', value: 'Office of the Sports Coordinator, CUHP' },
    { icon: 'calendar_today', label: 'Tournament Date', value: '26 February 2026' },
    { icon: 'access_time', label: 'Time', value: 'To be announced' },
]

export default function Venue() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Info */}
                    <div>
                        <span className="inline-block bg-primary-50 text-primary-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                            Venue Information
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Where It{' '}
                            <span className="text-gradient">All Happens</span>
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                            The sports activities will be held at the Main Playground of the Shahpur Campus,
                            organized under the supervision of the Office of the Sports Coordinator.
                        </p>

                        <div className="space-y-4">
                            {details.map((d) => (
                                <div
                                    key={d.label}
                                    className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="material-icons text-primary-600">{d.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{d.label}</p>
                                        <p className="text-gray-900 font-semibold">{d.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://www.cuhimachal.ac.in/index.php/Academics/academic_calender"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
                            >
                                <span className="material-icons text-base">calendar_month</span>
                                View Academic Calendar &amp; Schedule
                                <span className="material-icons text-sm transition-transform group-hover:translate-x-1">chevron_right</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Map placeholder card */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-primary-950 to-gray-900 rounded-3xl aspect-square flex flex-col items-center justify-center text-center p-10 shadow-2xl shadow-primary-900/30 overflow-hidden">
                            {/* Grid pattern */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(99,163,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,163,255,0.4) 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px',
                                }}
                            />

                            {/* Glowing rings */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center animate-pulse-slow">
                                        <div className="w-14 h-14 bg-primary-500/40 rounded-full flex items-center justify-center">
                                            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                                                <span className="material-icons text-white">location_on</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-white font-bold text-xl mb-2">Shahpur Campus</p>
                                <p className="text-blue-300/70 text-sm">Central University of Himachal Pradesh</p>
                                <p className="text-blue-300/50 text-xs mt-1">Kangra, Himachal Pradesh</p>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-4 -right-4 bg-white shadow-xl rounded-2xl p-4 border border-gray-100">
                            <p className="text-xs text-gray-400 font-medium">Main Ground</p>
                            <p className="text-gray-900 font-bold text-sm">Shahpur Campus</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
