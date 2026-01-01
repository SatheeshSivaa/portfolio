function About() {
    const cards = [
        {
            icon: 'ri-code-s-slash-line',
            title: 'Who I Am',
            description: 'QA Automation Engineer at Anubavam Technologies, building scalable test frameworks and ensuring software quality through automation.',
            highlight: 'Playwright | Selenium | Java | TypeScript',
        },
        {
            icon: 'ri-target-line',
            title: 'What I Do',
            description: 'Design POM frameworks, write reusable test scripts, and ensure software quality through comprehensive testing.',
        },
        {
            icon: 'ri-rocket-2-line',
            title: 'My Skills',
            list: [
                'Playwright & Selenium WebDriver',
                'Java & TypeScript scripting',
                'Jenkins CI/CD integration',
                'API testing with Postman',
            ],
        },
    ]

    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">
                        <i className="ri-user-3-line"></i> About Me
                    </span>
                    <h2 className="section-title">
                        Automation <span className="gradient-text">Expert</span>
                    </h2>
                    <p className="section-subtitle">Passionate about delivering quality software through automation</p>
                </div>

                <div className="about-grid">
                    {cards.map((card, index) => (
                        <div key={index} className={`about-card ${index === 0 ? 'featured' : ''}`}>
                            <div className="card-icon">
                                <i className={card.icon}></i>
                            </div>
                            <h3>{card.title}</h3>
                            {card.description && <p>{card.description}</p>}
                            {card.highlight && (
                                <div className="card-highlight">
                                    <i className="ri-focus-3-line"></i>
                                    <span>{card.highlight}</span>
                                </div>
                            )}
                            {card.list && (
                                <ul className="card-list">
                                    {card.list.map((item, i) => (
                                        <li key={i}>
                                            <i className="ri-check-line"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
