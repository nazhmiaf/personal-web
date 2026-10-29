import { motion } from "framer-motion";
import bgDark from "../assets/images/paper-texture-white.webp";

const experiences = [
  {
    role: "Frontend Developer",
    employment: "Internship",
    company: "PT NoLimit Indonesia",
    industry: "Technology Company",
    period: "Jul 2026 - Oct 2026",
    stack: ["Next.js"],
    description:
      "Maintaining and fixing bugs enhanced Engage Web App and Ops Panel Engage using Next.js, focusing on clean code, maintainability, and scalable UI architecture.",
  },
  {
    role: "Frontend Developer",
    employment: "Freelance",
    company: "PT CV. Tiga Permata Agri Lestari",
    industry: "Seed & Agricultural Company",
    period: "Sep 2025 - Dec 2025",
    stack: ["React.js", "REST API"],
    description:
      "Built responsive web interfaces using React.js and integrated RESTful APIs for seamless data communication.",
  },
  {
    role: "Software Engineer",
    employment: "Internship",
    company: "PT Kereta Api Indonesia (Persero)",
    industry: "Indonesia National Railway Company",
    period: "Jun 2025 - Aug 2025",
    stack: ["Flutter", "React.js", "Laravel", "SAP"],
    description:
      "Developed a Material Stock mobile app with Flutter, integrated SAP via RESTful APIs, and built a CMS using React.js & Laravel.",
  },
  {
    role: "Staff Administrator",
    employment: "Project Based",
    company: "PT Artristik Studio Bandung",
    industry: "IT Consultant Company",
    period: "Jan 2024 - Mar 2024",
    description:
      "Handled data verification and maintenance of AML beneficiaries, ensuring accuracy and regulatory compliance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bgDark})` }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <span className="font-display text-xs uppercase tracking-[3px] text-primary-ink font-semibold">
            Experience
          </span>
          <h2 className="section-heading-dark mt-1">Where I've worked</h2>
        </motion.div>

        {/* Experience list */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="border-b border-neutral/25"
        >
          {experiences.map((exp, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="grid md:grid-cols-[11rem_1fr] md:items-baseline gap-2 md:gap-10 py-7 md:py-8 border-t border-neutral/25"
            >
              {/* Period & employment type */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 md:block font-display">
                <p className="text-sm font-semibold text-primary-ink tabular-nums">
                  {exp.period}
                </p>
                <p className="text-sm text-neutral/70 md:mt-1">
                  {exp.employment}
                </p>
              </div>

              {/* Role details */}
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-neutral leading-snug">
                  {exp.role}
                </h3>
                <p className="font-display text-base text-neutral font-semibold mt-1">
                  {exp.company}
                  <span className="text-neutral/60 font-normal"> · {exp.industry}</span>
                </p>
                <p className="font-body text-[15px] text-neutral/80 leading-relaxed mt-3 max-w-3xl">
                  {exp.description}
                </p>
                {exp.stack && (
                  <p className="font-display text-xs uppercase tracking-[2px] text-neutral/60 mt-4">
                    {exp.stack.join(" / ")}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default Experience;
