import { ArrowUpRight, Lock } from "lucide-react";

const CardInner = ({ project, hasUrl }) => (
  <>
    {/* Image Container with Browser Window UI Frame */}
    <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/10">
      

      {/* Status Badge */}
      {hasUrl ? (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-primary font-display text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-primary/40">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Online
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

export default CardInner;
