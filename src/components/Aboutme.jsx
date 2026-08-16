import personalFoto from "../assets/images/Pau.webp"

const Aboutme = () => {
  const techStack = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  ];

  return (
    <section
      id="about-me"
      className="bg-black text-secondary-content bg-center bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Photo */}
        <div className="w-full md:w-5/12 flex-shrink-0">
          <div className="relative">
            <div className="aspect-[4/5]  overflow-hidden ">
              <img
                src={personalFoto}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="w-full md:w-7/12">
          <h2 className="section-heading-light mb-6">The Person Behind the Code</h2>

          <p className="text-secondary-content/70 leading-relaxed mb-4">
            I am an Informatics graduate from Telkom University, passionate about
            web development and focused on building modern web applications using
            React JS on the frontend, as well as Laravel and Express JS for
            backend and API development.
          </p>

          <p className="text-secondary-content/70 leading-relaxed mb-8">
            Experienced in working on real-world projects, highly adaptable to
            new technologies, and accustomed to working in a structured manner to
            deliver efficient, scalable, and user-friendly web applications.
          </p>

          {/* Tech Stack Icons */}
          <p className="mb-3">Skills : </p>
          <div className="flex flex-wrap gap-5">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 cursor-default"
                title={tech.name}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-7 h-7 ${tech.invert ? "invert" : ""}`}
                  />
                </div>
                <span className="font-display text-[10px] uppercase tracking-wider text-secondary-content/40 group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;