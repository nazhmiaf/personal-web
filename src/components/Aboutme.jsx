import { motion } from "framer-motion";
import personalFoto from "../assets/images/Pau.webp";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about-me"
      className="bg-black text-secondary-content bg-center bg-no-repeat overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-sm md:max-w-none md:w-5/12 flex-shrink-0"
        >
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={personalFoto}
                alt="Nazhmi Ahmad Fauzan"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-7/12"
        >
          <h2 className="section-heading-light mb-6">The Person Behind the Code</h2>

          <p className="text-secondary-content/70 md:text-justify leading-relaxed mb-4">
            I am an Informatics graduate from Telkom University, passionate about
            web development and focused on building modern web applications using
            React JS on the frontend, as well as Laravel and Express JS for
            backend and API development.
          </p>

          <p className="text-secondary-content/70 md:text-justify leading-relaxed mb-8">
            Experienced in working on real-world projects, highly adaptable to
            new technologies, and accustomed to working in a structured manner to
            deliver efficient, scalable, and user-friendly web applications.
          </p>

          {/* Tech Stack Icons */}
          <p className="mb-3 font-display text-sm tracking-wider uppercase text-primary font-semibold">
            Skills :
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-y-5 sm:flex sm:flex-wrap sm:gap-5"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex flex-col items-center gap-2 cursor-default"
                title={tech.name}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-7 h-7 ${tech.invert ? "invert" : ""}`}
                  />
                </div>
                <span className="font-display text-[10px] uppercase tracking-wider text-secondary-content/40 group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutme;