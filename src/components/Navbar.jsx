import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Activity', href: '#activity' },
    { label: 'Eligibility', href: '#eligibility' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/10'
                : 'bg-gray-950/80 backdrop-blur-md border-b border-white/10'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-blue-400 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">CS</span>
                    </div>
                    <div>
                        <p className={`font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                            CUHP Sports
                        </p>
                        <p className={`text-xs transition-colors ${scrolled ? 'text-primary-600' : 'text-blue-200'}`}>
                            Himachal Pradesh
                        </p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`font-medium text-sm transition-all duration-200 hover:text-primary-500 relative group ${scrolled ? 'text-gray-700' : 'text-white/90'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full rounded-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdK0uuXQ2WNmIB_JD6a849obvLCsxjQC2Z_TSIm6n9EWLInkg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-0.5"
                >
                    Register Now
                    <span className="material-icons text-sm">arrow_forward</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-icons">{menuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
                    <ul className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-gray-700 font-medium hover:text-primary-600 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdK0uuXQ2WNmIB_JD6a849obvLCsxjQC2Z_TSIm6n9EWLInkg/viewform?usp=header"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMenuOpen(false)}
                                className="block text-center bg-primary-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-primary-700 transition-colors"
                            >
                                Register Now
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
