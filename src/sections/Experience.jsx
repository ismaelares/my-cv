const experinces = [
  {
    company: "Company A",
    role: "Software Engineer",
    period: "Jan 2020 - Present",
    description:
      "Worked on developing web applications using React and Node.js.",
    current: true,
    technologies: ["React", "Node.js", "JavaScript"],
  },
  {
    company: "Company B",
    role: "Frontend Developer",
    period: "Jun 2018 - Dec 2019",
    description:
      "Focused on building responsive user interfaces with HTML, CSS, and JavaScript.",

    current: false,
    technologies: ["React", "Node.js", "JavaScript"],
  },
  {
    company: "Company C",
    role: "Intern",
    period: "Jan 2018 - May 2018",
    description:
      "Assisted in the development of internal tools and gained experience in software development.",
    current: false,
    technologies: ["React", "Node.js", "JavaScript"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My experience{" "}
            <span className="font-serif italic font-normal text-white">
              Working
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Over the years, I've had the opportunity to work with some amazing
            companies and projects. Here's a snapshot of my career journey so
            far.
          </p>
        </div>
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experinces.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm mt-4 text-muted-foreground">
                      {exp.description}
                    </p>
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-surface text-sm rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
