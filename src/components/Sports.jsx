const features = [
    { icon: 'group', label: 'Team of 6 + 2 Substitutes' },
    { icon: 'timer', label: 'Format: Knockout Rounds' },
]

export default function Sports() {
    return (
        <section id="activity" className="section-padding bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-primary-50 text-primary-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                        Featured Sports
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Join the Premier{' '}
                        <span className="text-gradient">Inter-Departmental</span>
                        <br />
                        Competition
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-base">
                        Showcase your athletic prowess alongside your peers from all science streams.
                    </p>
                </div>

                {/* Main sport card */}
                <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-blue-950 rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/30">
                    <div className="relative p-8 md:p-12">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-400/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Event info */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                                        <span className="material-icons text-primary-300 text-3xl">sports_volleyball</span>
                                    </div>
                                    <div>
                                        <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest">Premier Event</p>
                                        <h3 className="text-3xl font-black text-white">Volleyball</h3>
                                    </div>
                                </div>

                                <p className="text-blue-100/70 text-lg leading-relaxed mb-8">
                                    Experience the thrill of the inter-departmental volleyball tournament.
                                    Teams from all science streams will compete for the{' '}
                                    <span className="text-white font-semibold">championship trophy</span>.
                                </p>

                                {/* Feature pills */}
                                <div className="flex flex-wrap gap-3">
                                    {features.map((f) => (
                                        <div key={f.label} className="inline-flex items-center gap-2 glass rounded-xl px-4 py-2.5">
                                            <span className="material-icons text-primary-300 text-base">{f.icon}</span>
                                            <span className="text-white text-sm font-medium">{f.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Stat cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: '6+2', label: 'Players per Team', icon: 'people' },
                                    { value: 'KO', label: 'Knockout Format', icon: 'emoji_events' },
                                    { value: '26 Feb', label: 'Tournament Date', icon: 'calendar_today' },
                                    { value: '∞', label: 'Spirit & Energy', icon: 'bolt' },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
                                    >
                                        <span className="material-icons text-primary-300 mb-2 block">{stat.icon}</span>
                                        <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                                        <p className="text-blue-200/50 text-xs font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom banner */}
                    <div className="bg-primary-600/30 border-t border-white/10 px-8 md:px-12 py-5 flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-primary-300 text-sm">location_on</span>
                            <span className="text-blue-200 text-sm">Main Playground, Shahpur Campus</span>
                        </div>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdK0uuXQ2WNmIB_JD6a849obvLCsxjQC2Z_TSIm6n9EWLInkg/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                        >
                            Register Team
                            <span className="material-icons text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
