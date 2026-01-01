function Contact() {
    const contactInfo = [
        {
            icon: 'ri-mail-line',
            label: 'Email',
            value: 'satheesh30526@gmail.com',
            href: 'mailto:satheesh30526@gmail.com',
        },
        {
            icon: 'ri-phone-line',
            label: 'Phone',
            value: '+91 9047489584',
            href: 'tel:9047489584',
        },
        {
            icon: 'ri-linkedin-line',
            label: 'LinkedIn',
            value: 'Connect with me',
            href: 'https://www.linkedin.com/in/satheesh-s-07a0971a5',
            external: true,
        },
    ]

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-content">
                        <span className="section-tag">
                            <i className="ri-mail-send-line"></i> Contact
                        </span>
                        <h2 className="section-title">
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="contact-description">
                            Ready to discuss your next automation project? Get in touch.
                        </p>

                        <div className="contact-links">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="contact-item"
                                    target={item.external ? '_blank' : undefined}
                                    rel={item.external ? 'noopener noreferrer' : undefined}
                                >
                                    <div className="contact-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-label">{item.label}</span>
                                        <span className="contact-value">{item.value}</span>
                                    </div>
                                    <i className="ri-arrow-right-up-line contact-arrow"></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="card-content">
                            <h3>Satheesh S</h3>
                            <p>QA Automation Engineer</p>
                            <div className="card-social">
                                <a href="https://www.linkedin.com/in/satheesh-s-07a0971a5" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                                <a href="https://github.com/satheesh" target="_blank" rel="noopener noreferrer">
                                    <i className="ri-github-fill"></i>
                                </a>
                                <a href="mailto:satheesh30526@gmail.com">
                                    <i className="ri-mail-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
