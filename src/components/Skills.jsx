function Skills() {
    const skillCategories = [
        {
            icon: 'ri-robot-line',
            title: 'Automation',
            skills: [
                { name: 'Playwright', level: 'expert' },
                { name: 'Selenium', level: 'expert' },
                { name: 'Appium', level: 'advanced' },
                { name: 'Cucumber', level: 'advanced' },
            ],
        },
        {
            icon: 'ri-code-line',
            title: 'Languages',
            skills: [
                { name: 'Java', level: 'expert' },
                { name: 'TypeScript', level: 'advanced' },
                { name: 'SQL', level: 'advanced' },
            ],
        },
        {
            icon: 'ri-settings-4-line',
            title: 'DevOps & Tools',
            skills: [
                { name: 'Jenkins', level: 'advanced' },
                { name: 'Git', level: 'expert' },
                { name: 'Jira', level: 'expert' },
                { name: 'Postman', level: 'advanced' },
                { name: 'Maven', level: 'advanced' },
            ],
        },
    ]

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">
                        <i className="ri-tools-line"></i> Tech Stack
                    </span>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">Technologies I use for test automation</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <div className="category-header">
                                <div className="category-icon">
                                    <i className={category.icon}></i>
                                </div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-items">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className={`skill-chip ${skill.level}`}>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
