import { useState, useEffect } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav-container">
                <a href="#home" className="nav-logo">
                    Satheesh S
                </a>

                <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="nav-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="nav-cta">
                    <span>Hire Me</span>
                    <i className="ri-arrow-right-up-line"></i>
                </a>

                <button
                    className={`nav-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    )
}

export default Navbar
