import bgDark from "../assets/images/paper-texture-white.webp";

const experiences = [
  {
    role: "Internship - Frontend Developer",
    company: "PT NoLimit Indonesia",
    type: "Technology Company",
    period: "Jul 2026 - Present",
    description:
      "Developing and maintaining frontend features for web applications using modern JavaScript frameworks.",
    avatar: "https://ui-avatars.com/api/?name=NL&background=C5A059&color=261900&size=48&rounded=true&bold=true",
  },
  {
    role: "Freelance - Frontend Developer",
    company: "PT CV. Tiga Permata Agri Lestari",
    type: "Seed & Agricultural Company",
    period: "Sep 2025 - Dec 2025",
    description:
      "Built responsive web interfaces using React.js and integrated RESTful APIs for seamless data communication.",
    avatar: "https://ui-avatars.com/api/?name=TP&background=C5A059&color=261900&size=48&rounded=true&bold=true",
  },
  {
    role: "Internship - Software Engineer",
    company: "PT Kereta Api Indonesia (Persero)",
    type: "Indonesia National Railway Company",
    period: "Jun 2025 - Aug 2025",
    description:
      "Developed a Material Stock mobile app with Flutter, integrated SAP via RESTful APIs, and built a CMS using React.js & Laravel.",
    avatar: "https://ui-avatars.com/api/?name=KAI&background=C5A059&color=261900&size=48&rounded=true&bold=true",
  },
  {
    role: "Project Based - Staff Administrator",
    company: "PT Artristik Studio Bandung",
    type: "IT Consultant Company",
    period: "Jan 2024 - Mar 2024",
    description:
      "Handled data verification and maintenance of AML beneficiaries, ensuring accuracy and regulatory compliance.",
    avatar: "https://ui-avatars.com/api/?name=AS&background=C5A059&color=261900&size=48&rounded=true&bold=true",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgDark})` }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="section-heading-dark text-center mb-16">Experience</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral/20 hidden md:block" />

          <div className="space-y-14">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0 relative z-10">
                  <img
                    src={exp.avatar}
                    alt={exp.company}
                    className="w-12 h-12 rounded-full border-2 border-primary/40"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="font-display text-xs uppercase tracking-[2px] text-primary font-semibold">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-neutral mt-1">
                    {exp.role}
                  </h3>
                  <p className="font-display text-sm text-neutral/80 font-medium mt-0.5">
                    {exp.company}
                  </p>
                  <p className="font-display text-xs text-neutral/50 mt-0.5">
                    {exp.type}
                  </p>
                  <p className="text-neutral/70 leading-relaxed mt-3 text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
