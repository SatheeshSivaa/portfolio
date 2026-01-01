import { useEffect, useState } from 'react'

function Hero() {
    const [text, setText] = useState('')
    const roles = ['Selenium Test Suites', 'Playwright Frameworks', 'CI/CD Pipelines', 'Automation Solutions']
    const [roleIndex, setRoleIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (text.length < currentRole.length) {
                    setText(currentRole.slice(0, text.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                if (text.length > 0) {
                    setText(text.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [text, isDeleting, roleIndex])

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="greeting">Hello, I'm</span>
                        <span className="name">Satheesh S</span>
                        <span className="role">
                            <span className="role-prefix">I build</span>
                            <span className="role-text">{text}</span>
                            <span className="cursor">|</span>
                        </span>
                    </h1>

                    <p className="hero-description">
                        Crafting robust test automation solutions with <strong>Playwright</strong> & <strong>Selenium</strong>.
                        Delivering quality through <span className="highlight">CI/CD integration</span>.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Frameworks Built</span>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            <span>Let's Work Together</span>
                            <i className="ri-arrow-right-line"></i>
                        </a>
                        <a href="#experience" className="btn btn-outline">
                            <i className="ri-briefcase-line"></i>
                            <span>View My Work</span>
                        </a>
                    </div>

                    <div className="hero-social">
                        <a href="https://www.linkedin.com/in/satheesh-s-07a0971a5" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="ri-linkedin-fill"></i>
                        </a>
                        <a href="https://github.com/satheesh" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="ri-github-fill"></i>
                        </a>
                        <a href="mailto:satheesh30526@gmail.com" className="social-link">
                            <i className="ri-mail-fill"></i>
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="profile-wrapper">
                        <div className="profile-glow"></div>
                        <img src="/profile.jpg" alt="Satheesh S" className="profile-image" />
                        <div className="profile-ring"></div>
                    </div>

                    <div className="floating-icons">
                        <div className="floating-icon" style={{ '--delay': '0s' }}>
                            <i className="ri-play-circle-fill"></i>
                            <span>Playwright</span>
                        </div>
                        <div className="floating-icon" style={{ '--delay': '0.2s' }}>
                            <i className="ri-chrome-fill"></i>
                            <span>Selenium</span>
                        </div>
                        <div className="floating-icon" style={{ '--delay': '0.4s' }}>
                            <i className="ri-cup-fill"></i>
                            <span>Java</span>
                        </div>
                        <div className="floating-icon" style={{ '--delay': '0.6s' }}>
                            <i className="ri-git-branch-fill"></i>
                            <span>Jenkins</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
