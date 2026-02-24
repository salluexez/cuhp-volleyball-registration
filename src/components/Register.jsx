const steps = [
    { icon: 'person_add', label: 'Create Account', desc: 'Use your official CUHP university email.' },
    { icon: 'group_add', label: 'Form Your Team', desc: '6 main players + 2 substitutes.' },
    { icon: 'how_to_reg', label: 'Submit Registration', desc: 'Fill the form before Feb 26, 2026.' },
    { icon: 'sports_volleyball', label: 'Compete!', desc: 'Show up on 26 February 2026.' },
]

export default function Register() {
    return (
        <section id="register" className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-blue-950 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block bg-white/10 text-primary-300 font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase border border-white/10">
                        Register
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Ready to{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-blue-300">
                            Compete?
                        </span>
                    </h2>
                    <p className="text-blue-100/70 max-w-xl mx-auto text-lg">
                        Interested participants can register their teams using the official registration form.
                        Make sure to complete registration before{' '}
                        <span className="text-white font-semibold">Feb 26th, 2026</span>.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {steps.map((step, i) => (
                        <div key={step.label} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            {/* Step number */}
                            <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-primary-600/50 text-primary-200 text-xs font-bold flex items-center justify-center">
                                {i + 1}
                            </div>
                            <span className="material-icons text-primary-300 text-3xl mb-3 block">{step.icon}</span>
                            <h3 className="text-white font-bold mb-1">{step.label}</h3>
                            <p className="text-blue-200/60 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Card */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
                        <span className="material-icons text-amber-400 text-sm">info</span>
                        <span className="text-amber-300 text-sm font-medium">Requires university email login for verification</span>
                    </div>

                    <h3 className="text-white text-2xl md:text-3xl font-black mb-6">
                        Registration Closes February 26th
                    </h3>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdK0uuXQ2WNmIB_JD6a849obvLCsxjQC2Z_TSIm6n9EWLInkg/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-400 text-white font-bold px-10 py-4 rounded-2xl shadow-2xl shadow-primary-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary-400/60"
                        >
                            <span className="material-icons text-xl">how_to_reg</span>
                            Register Your Team
                            <span className="material-icons text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors"
                        >
                            Have questions? Contact us
                            <span className="material-icons text-sm">chevron_right</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
