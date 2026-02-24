const quickLinks = [
    { label: 'University Website', href: 'https://www.cuhimachal.ac.in/', target: '_blank' },
    { label: 'Student Portal', href: 'https://www.cuhimachal.ac.in/', target: '_blank' },
    { label: 'Academic Calendar 2026', href: 'https://www.cuhimachal.ac.in/index.php/Academics/academic_calender', target: '_blank' },
    { label: 'Privacy Policy', href: '#' },
]

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Activity', href: '#activity' },
    { label: 'Eligibility', href: '#eligibility' },
    { label: 'Contact', href: '#contact' },
]

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
                {/* Brand */}
                <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-blue-400 flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-sm">CS</span>
                        </div>
                        <div>
                            <p className="font-bold text-lg leading-tight text-white">CUHP Sports</p>
                            <p className="text-primary-400 text-xs">Himachal Pradesh</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        The Central University of Himachal Pradesh is established under the
                        Central Universities Act 2009. We strive for excellence in education and research.
                    </p>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.cuhimachal.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                            aria-label="University Website"
                        >
                            <span className="material-icons text-sm">public</span>
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                            aria-label="Email"
                        >
                            <span className="material-icons text-sm">alternate_email</span>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Quick Links</h4>
                    <ul className="space-y-3">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target={link.target || '_self'}
                                    rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                >
                                    <span className="material-icons text-xs text-primary-600 group-hover:translate-x-0.5 transition-transform">chevron_right</span>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Navigation</h4>
                    <ul className="space-y-3">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                >
                                    <span className="material-icons text-xs text-primary-600 group-hover:translate-x-0.5 transition-transform">chevron_right</span>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Event date card */}
                    <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-4">
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Event Date</p>
                        <p className="text-white font-black text-xl">28 February 2026</p>
                        <p className="text-primary-400 text-xs mt-1">National Science Day</p>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-sm">
                        © 2026 Central University of Himachal Pradesh. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                        <span className="text-gray-500 text-xs">Registrations Open</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
