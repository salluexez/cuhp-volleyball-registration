import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Sports from './components/Sports'
import Eligibility from './components/Eligibility'
import Venue from './components/Venue'
import Register from './components/Register'
import Coordinators from './components/Coordinators'
import Footer from './components/Footer'

function App() {
    return (
        <div className="font-lexend">
            <Navbar />
            <Hero />
            <About />
            <Sports />
            <Eligibility />
            <Venue />
            <Register />
            <Coordinators />
            <Footer />
        </div>
    )
}

export default App
