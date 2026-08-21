import { motion } from "framer-motion";
import bgTexture from "../assets/images/texture-paper-black.webp";
import nakaseed from "../assets/images/projects/nakaseed.webp";
import cms from "../assets/images/projects/cms.webp";
import { ArrowUpRight, Lock } from "lucide-react";

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
                whileHover={{ y: -8 }}
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

const CardInner = ({ project, hasUrl }) => (
  <>
    {/* Image Container with Browser Window UI Frame */}
    <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/10">
      {/* Window Control Dots */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
        <div className="w-2 h-2 rounded-full bg-red-500/80" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
        <div className="w-2 h-2 rounded-full bg-green-500/80" />
      </div>

      {/* Status Badge */}
      {hasUrl ? (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-primary font-display text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-primary/40">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Live Demo
        </div>
      ) : (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-md text-amber-400 font-display text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-amber-500/40">
          <Lock className="w-3 h-3 text-amber-400" />
          {project.badgeText || "Internal Only"}
        </div>
      )}

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
      />

      {/* Hover Overlay with Action Button */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        {hasUrl ? (
          <span className="inline-flex items-center gap-2 bg-primary text-primary-content font-display text-xs font-semibold px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Visit Website <ArrowUpRight className="w-4 h-4" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 bg-primary text-primary-content font-display text-xs font-semibold px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Lock className="w-3.5 h-3.5 text-primary-content" />
            {project.accessNote || "KAI Credentials Required"}
          </span>
        )}
      </div>
    </div>

    {/* Content Details */}
    <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-display text-xl font-bold text-secondary-content group-hover:text-primary transition-colors flex items-center gap-1.5">
            {project.title}
            {hasUrl ? (
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-primary" />
            ) : (
              <Lock className="w-3.5 h-3.5 text-amber-400/80 ml-0.5" />
            )}
          </h3>
        </div>

        <p className="font-inter text-sm text-secondary-content/70 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Tech Tags */}
      {project.tags && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[11px] font-display text-primary/90 bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </>
);

export default SelectedWorks;

