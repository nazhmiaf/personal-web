import { motion } from "framer-motion";
import bgTexture from "../assets/images/texture-paper-black.webp";
import nakaseed from "../assets/images/projects/nakaseed.webp";
import himakutaf from "../assets/images/projects/himakutaf.webp";
import resume from "../assets/images/projects/resume.png"
import cms from "../assets/images/projects/cms.webp";
import CardInner from "./CardInner";

const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

const techStack = {
  react: { name: "React.js", icon: devicon("react/react-original.svg") },
  nextjs: { name: "Next.js", icon: devicon("nextjs/nextjs-original.svg"), invert: true },
  fastapi: { name: "FastAPI", icon: devicon("fastapi/fastapi-original.svg") },
  laravel: { name: "Laravel", icon: devicon("laravel/laravel-original.svg") },
  mongodb: { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg") },
  express: { name: "Express.js", icon: devicon("express/express-original.svg"), invert: true },
};

const projects = [
  {
    title: "nakaseed",
    role: "Frontend",
    description: "Seed & Agrikultur company profile with chatbot",
    image: nakaseed,
    url: "https://nakaseed-frontend.vercel.app/",
    tags: [techStack.react, techStack.fastapi],
    isInternal: false,
  },
  {
    title: "CMS Application of Material Stock PT KAI",
    role: "Fullstack",
    description: "Application for managing material stock for PT KAI",
    image: cms,
    url: null,
    tags: [techStack.react, techStack.laravel],
    isInternal: true,
    badgeText: "Internal Only",
    accessNote: "KAI Credentials Required",
  },
  {
    title: "Himakutaf 2026",
    role: "Frontend",
    description: "Website for Telkom Accounting Fair (Himaku) 2026.",
    image: himakutaf,
    url: "https://himakutaf.com/",
    tags: [techStack.nextjs],
    isInternal: false,
  },
  {
    title: "Resume Builder App",
    role: "Fullstack",
    description: "Personal project application",
    image: resume,
    url: "https://zan-resume-app.vercel.app/",
    tags: [techStack.mongodb, techStack.react, techStack.express],
    isInternal: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SelectedWorks = () => {
  return (
    <section
      id="projects"
      className="bg-cover bg-center bg-no-repeat text-secondary-content overflow-hidden"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-8 md:mb-12"
        >
          <div>
            <span className="font-display text-xs uppercase tracking-[3px] text-primary font-semibold">
              Projects
            </span>
            <h2 className="section-heading-light mt-1">Let's see my works!</h2>
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, idx) => {
            const hasUrl = Boolean(project.url);

            return (
              <motion.div key={idx} variants={cardVariants} className="h-full">
                {hasUrl ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-full flex flex-col rounded-box overflow-hidden bg-neutral/70 border border-white/10 hover:border-primary/60 transition-colors duration-500"
                  >
                    <CardInner project={project} hasUrl={hasUrl} index={idx} />
                  </a>
                ) : (
                  <div className="group h-full flex flex-col rounded-box overflow-hidden bg-neutral/70 border border-white/10 cursor-default">
                    <CardInner project={project} hasUrl={hasUrl} index={idx} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWorks;

