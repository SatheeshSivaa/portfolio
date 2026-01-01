function Experience() {
    const experiences = [
        {
            date: '2024 - Present',
            title: 'QA Automation Tester',
            company: 'Anubavam Technologies Pvt. Ltd.',
            description: 'Building Playwright & Selenium frameworks, writing automated tests, and integrating with Jenkins CI/CD pipelines.',
            tags: ['Playwright', 'Selenium', 'Jenkins', 'Java', 'TypeScript'],
            current: true,
        },
        {
            date: '2023',
            title: 'Software QA Tester',
            company: 'Inmakes Infotech Pvt Ltd',
            description: 'Manual testing, test case creation, bug reporting with Jira, and Selenium WebDriver fundamentals.',
            tags: ['Manual Testing', 'Selenium', 'Jira'],
            current: false,
        },
        {
            date: '2020 - 2023',
            title: 'GIS Analyst',
            company: 'EDR Continuous Information',
            description: 'Data digitization and workflow automation using QGIS, developing analytical skills.',
            tags: ['QGIS', 'Data Analysis', 'Automation'],
            current: false,
        },
    ]

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">
                        <i className="ri-briefcase-line"></i> Experience
                    </span>
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">My professional journey</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${exp.current ? 'current' : ''}`}>
                            <div className="timeline-marker">
                                <i className="ri-checkbox-circle-fill"></i>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <span className="timeline-date">
                                        <i className="ri-calendar-line"></i>
                                        {exp.date}
                                    </span>
                                    {exp.current && <span className="timeline-badge">Current</span>}
                                </div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <span className="timeline-company">
                                    <i className="ri-building-line"></i>
                                    {exp.company}
                                </span>
                                <p className="timeline-description">{exp.description}</p>
                                <div className="timeline-tags">
                                    {exp.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
