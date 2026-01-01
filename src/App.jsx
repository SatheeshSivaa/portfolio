import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className="loader">
                <div className="loader-content">
                    <div className="loader-spinner"></div>
                    <h2>Satheesh S</h2>
                    <p>QA Automation Engineer</p>
                </div>
            </div>
        )
    }

    return (
        <div className="app">
            <div className="gradient-bg"></div>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <footer className="footer">
                <p>© 2025 Satheesh S. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
