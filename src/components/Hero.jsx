import { useEffect, useState } from 'react'

export default function Hero() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100)
        return () => clearTimeout(t)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-primary-950 to-gray-900" />

            {/* Glowing orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-800/10 rounded-full blur-3xl" />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(19,91,236,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(19,91,236,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-primary-400/60 rounded-full animate-float"
                    style={{
                        left: `${10 + i * 12}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: `${4 + i * 0.5}s`,
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-10">
                {/* Badge */}
                <div
                    className={`inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-blue-200 text-sm font-medium">28 February 2026 · Shahpur Campus</span>
                </div>

                {/* Main heading */}
                <h1
                    className={`text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    National{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-300">
                        Science Day
                    </span>
                    <br />
                    <span className="text-4xl md:text-6xl lg:text-7xl text-white/90">2026</span>
                </h1>

                {/* Subtitle */}
                <p
                    className={`text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-4 font-light transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    Organized by{' '}
                    <span className="text-white font-medium">Central University of Himachal Pradesh</span>
                </p>
                <p
                    className={`text-base text-blue-200/60 max-w-xl mx-auto mb-12 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    Celebrating the spirit of scientific inquiry through athletic excellence.
                </p>

                {/* Year & Tag pills */}
                <div
                    className={`flex items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="glass rounded-2xl px-6 py-3 text-center">
                        <p className="text-3xl font-black text-white">2026</p>
                    </div>
                    <div className="glass rounded-2xl px-6 py-3 text-center">
                        <p className="text-sm font-semibold text-primary-300">Science &amp; Sport</p>
                    </div>
                </div>

                {/* CTA buttons */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdK0uuXQ2WNmIB_JD6a849obvLCsxjQC2Z_TSIm6n9EWLInkg/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-primary-600/40 hover:shadow-primary-500/60 transition-all duration-300 hover:-translate-y-1"
                    >
                        <span className="material-icons text-lg">how_to_reg</span>
                        Register Your Team
                        <span className="material-icons text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                    <a
                        href="#activity"
                        className="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        <span className="material-icons text-lg">sports_volleyball</span>
                        View Activity
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-white/40 text-xs font-medium">Scroll</span>
                <span className="material-icons text-white/40 text-lg">expand_more</span>
            </div>
        </section>
    )
}
