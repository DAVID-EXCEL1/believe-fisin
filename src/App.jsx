import React from 'react';

// Helper component for skill categories - MOVED OUTSIDE App component
const SkillCategory = ({ title, skills }) => (
    <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="bg-blue-700 text-blue-100 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

// Main App component
const App = () => {
    // Define Believe's data
    const personalData = {
        name: "Believe Fisin",
        title: "Data Analyst",
        email: "Fisinbelieve8@gmail.com",
        phone: "+2349153461488",
        linkedin: "https://www.linkedin.com/in/believe-fisin",
        profileSummary: "Believe is a highly motivated and detail-oriented Data Analyst with 3+ years of experience in data analysis, visualization, and reporting. Proficient in statistical modeling, data mining, and data visualization tools. Strong understanding of data governance and quality assurance. He is passionate about leveraging data to solve real-world problems and drive informed decision-making, excelling at transforming complex datasets into clear, actionable insights that contribute to business growth.",
        experience: [
            {
                title: "Data Analyst",
                company: "Ladoke Akintola University of Technology",
                years: "2024 - 2025",
                description: [
                    "Analyzed large datasets to identify trends and insights, presenting findings to stakeholders.",
                    "Developed and maintained dashboards and reports using Tableau and Power BI.",
                    "Collaborated with cross-functional teams to design and implement data-driven solutions.",
                    "Ensured data quality and governance, implementing data validation and cleansing processes."
                ]
            }
        ],
        projects: [
            {
                title: "Predictive Sales Forecasting Model",
                description: "Developed a predictive model using regression analysis to forecast sales trends, resulting in a 15% increase in sales. This project involved extensive data cleaning, feature engineering, model training, and evaluation to deliver accurate sales predictions.",
                tools: ["Python (Pandas, NumPy, Scikit-learn)", "Regression Analysis"],
                image: "https://placehold.co/600x400/2D3748/A0AEC0?text=Predictive+Model", // Placeholder image adjusted for dark mode
                githubLink: "#" // Placeholder for GitHub link
            },
            {
                title: "Customer Behavior Analysis Dashboard",
                description: "Created interactive dashboards using Tableau to visualize customer behavior, improving customer engagement by 20%. The dashboard provided key insights into customer demographics, purchasing patterns, and engagement metrics, enabling data-driven marketing strategies.",
                tools: ["Tableau"],
                image: "https://placehold.co/600x400/2D3748/A0AEC0?text=Customer+Dashboard", // Placeholder image adjusted for dark mode
                tableauLink: "#" // Placeholder for Tableau Public link
            }
        ],
        skills: {
            "Data Analysis & Visualization": ["Excel", "Tableau", "Power BI", "Python (Pandas, NumPy, Matplotlib)"],
            "Statistical Modeling": ["Regression", "Clustering", "Decision Trees"],
            "Data Mining & Databases": ["SQL", "NoSQL databases"],
            "Operating Systems": ["Windows", "Linux"]
        },
        education: {
            degree: "Bachelor of Technology in Agric Economics",
            institution: "Ladoke Akintola University of Technology (LAUTECH)",
            years: "09/2019 - 04/2024"
        }
    };

    // Function for smooth scrolling
    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault(); // Prevent default anchor link behavior
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="font-sans bg-gray-950 text-gray-100 leading-relaxed antialiased">
            {/* Tailwind CSS CDN - IMPORTANT for styling */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            {/* Main container with Inter font */}
            <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        `}</style>

            {/* Header/Navigation (simple for single page) */}
            <header className="bg-gray-800 shadow-lg py-4 px-6 fixed w-full z-10 top-0">
                <nav className="container mx-auto flex justify-between items-center">
                    <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-2xl font-bold text-blue-400 rounded-md p-2 hover:bg-gray-700 transition-colors">
                        {personalData.name.split(' ')[0]}
                    </a>
                    <div className="space-x-4">
                        <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-gray-300 hover:text-blue-400 font-medium transition-colors">About</a>
                        <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Skills</a>
                        <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Projects</a>
                        <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')} className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Experience</a>
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-gray-300 hover:text-blue-400 font-medium transition-colors">Contact</a>
                    </div>
                </nav>
            </header>

            <main className="pt-20"> {/* Padding to account for fixed header */}

                {/* Hero Section - Updated to match template layout */}
                <section id="home" className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 md:py-32 flex items-center justify-center min-h-screen-75">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                        {/* Text Content - Left Side */}
                        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                                Hi, I'm {personalData.name}!
                            </h1>
                            <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
                                {personalData.title} | Transforming Data into Actionable Insights
                            </p>
                            <a
                                href="#projects"
                                onClick={(e) => handleSmoothScroll(e, 'projects')}
                                className="inline-block bg-blue-400 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-300 hover:scale-105 transition-all duration-300 ease-in-out transform"
                            >
                                View My Work
                            </a>
                        </div>

                        {/* Image - Right Side */}
                        <div className="md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
                                {/* Placeholder for Believe's picture */}
                                <img
                                    src="/believe.jpg"
                                    alt="Believe Fisin"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/320x320/2D3748/A0AEC0?text=Photo'; }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Me Section */}
                <section id="about" className="py-16 md:py-24 bg-gray-900">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-10">About Me</h2>
                        <p className="text-lg text-gray-300 leading-relaxed text-center">
                            {personalData.profileSummary}
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-16 md:py-24 bg-gray-950">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-10">Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Object.entries(personalData.skills).map(([category, skills]) => (
                                <SkillCategory key={category} title={category} skills={skills} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16 md:py-24 bg-gray-900">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-10">My Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {personalData.projects.map((project, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover"
                                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/2D3748/A0AEC0?text=${encodeURIComponent(project.title.replace(/\s/g, '+'))}`; }}
                                    />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold text-gray-100 mb-3">{project.title}</h3>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        <div className="mb-4">
                                            <span className="font-medium text-gray-300">Tools: </span>
                                            {project.tools.map((tool, idx) => (
                                                <span key={idx} className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full mr-1">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                        {(project.githubLink || project.tableauLink) && (
                                            <div className="flex space-x-4">
                                                {project.githubLink && (
                                                    <a
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-md hover:bg-blue-700 transition-colors shadow-md"
                                                    >
                                                        View Code
                                                    </a>
                                                )}
                                                {project.tableauLink && (
                                                    <a
                                                        href={project.tableauLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block bg-blue-600 text-white font-medium py-2 px-5 rounded-md hover:bg-blue-700 transition-colors shadow-md"
                                                    >
                                                        View Dashboard
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-16 md:py-24 bg-gray-950">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-10">Experience</h2>
                        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                            {personalData.experience.map((job, index) => (
                                <div key={index} className="mb-6 last:mb-0">
                                    <h3 className="text-2xl font-semibold text-gray-100">{job.title}</h3>
                                    <p className="text-blue-400 text-lg font-medium">{job.company}</p>
                                    <p className="text-gray-400 text-sm mb-4">{job.years}</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        {job.description.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="py-16 md:py-24 bg-gray-900">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-10">Education</h2>
                        <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                            <h3 className="text-2xl font-semibold text-gray-100 mb-2">{personalData.education.degree}</h3>
                            <p className="text-blue-400 text-lg font-medium mb-1">{personalData.education.institution}</p>
                            <p className="text-gray-400 text-sm">{personalData.education.years}</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
                        <p className="text-lg mb-8 opacity-90">
                            I'm always open to new opportunities and collaborations. Feel free to reach out!
                        </p>
                        <div className="space-y-4">
                            <p className="text-xl">
                                <a href={`mailto:${personalData.email}`} className="hover:underline text-blue-300">
                                    Email: {personalData.email}
                                </a>
                            </p>
                            <p className="text-xl">
                                Phone: {personalData.phone}
                            </p>
                            <p className="text-xl">
                                <a
                                    href={personalData.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-blue-300"
                                >
                                    LinkedIn: {personalData.linkedin}
                                </a>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-950 text-gray-400 py-8 text-center">
                    <div className="container mx-auto px-4">
                        <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default App;
