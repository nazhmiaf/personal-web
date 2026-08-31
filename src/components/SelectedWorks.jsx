import { motion } from "framer-motion";
import bgTexture from "../assets/images/texture-paper-black.webp";
import nakaseed from "../assets/images/projects/nakaseed.webp";
import himakutaf from "../assets/images/projects/himakutaf.webp";
import cms from "../assets/images/projects/cms.webp";
import CardInner from "./CardInner";

const projects = [
  {
    title: "nakaseed",
    description: "Seed & Agrikultur Web Profile with chatbot",
    image: nakaseed,
    url: "https://nakaseed-frontend.vercel.app/",
    tags: ["React.js", "FastApi"],
    isInternal: false,
  },
  {
    title: "CMS Application of Material Stock PT KAI",
    description: "Application for managing material stock for PT KAI",
    image: cms,
    url: null,
    tags: ["React.js", "Laravel"],
    isInternal: true,
    badgeText: "Internal Only",
    accessNote: "KAI Credentials Required",
  },
  {
    title: "Himakutaf 2026",
    description: "Website for Telkom Accounting Fair (Himaku) 2026.",
    image: himakutaf,
    url: "https://himakutaf.com/",
    tags: ["Next.js"],
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
          className="flex items-end justify-between mb-12"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => {
            const hasUrl = Boolean(project.url);

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={project.isInternal ? undefined : { y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {hasUrl ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer block rounded-md bg-neutral-900/60 border border-white/10 hover:border-primary/50 transition-colors duration-500 overflow-hidden shadow-xl hover:shadow-primary/10 h-full flex flex-col"
                  >
                    <CardInner project={project} hasUrl={hasUrl} />
                  </a>
                ) : (
                  <div className="group cursor-default block rounded-md bg-neutral-900/60 border border-white/10 hover:border-amber-500/30 transition-colors duration-500 overflow-hidden shadow-xl h-full flex flex-col">
                    <CardInner project={project} hasUrl={hasUrl} />
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

