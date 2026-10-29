import { Lock } from "lucide-react";

const CardInner = ({ project, hasUrl, index }) => (
  <>
    {/* Project Image */}
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/40">
      <img
        src={project.image}
        alt={project.title}
        className={`w-full h-full object-cover object-top grayscale-[35%] group-hover:grayscale-0 transition-all duration-700 ease-out ${
          hasUrl ? "group-hover:scale-[1.03]" : ""
        }`}
      />
    </div>

    {/* Content Details */}
    <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col">
      <div className="flex items-baseline justify-between gap-4 font-display text-[11px] uppercase tracking-[2px]">
        <span className="text-primary tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        {hasUrl ? (
          <span className="text-secondary-content/50 group-hover:text-primary transition-colors">
            Visit site
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-amber-400/80">
            <Lock className="w-3 h-3" />
            {project.badgeText || "Internal Only"}
          </span>
        )}
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-bold text-secondary-content mt-3 leading-tight">
        {project.title}
      </h3>

      <p className="font-body text-[15px] text-secondary-content/65 leading-relaxed mt-2 mb-6">
        {project.description}
        {!hasUrl && project.accessNote && (
          <span className="block text-sm italic text-secondary-content/40 mt-1">
            {project.accessNote}
          </span>
        )}
      </p>

      {/* Role & Stack */}
      <dl className="mt-auto grid grid-cols-2 border-t border-white/10 pt-4 font-display">
        <div>
          <dt className="text-[10px] uppercase tracking-[2px] text-secondary-content/40">
            Role
          </dt>
          <dd className="text-sm font-medium text-secondary-content mt-1.5">
            {project.role}
          </dd>
        </div>
        {project.tags && (
          <div>
            <dt className="text-[10px] uppercase tracking-[2px] text-secondary-content/40">
              Stack
            </dt>
            <dd className="flex items-center gap-3 mt-1.5">
              {project.tags.map((tech) => (
                <img
                  key={tech.name}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  className={`w-5 h-5 ${tech.invert ? "invert" : ""}`}
                />
              ))}
            </dd>
          </div>
        )}
      </dl>
    </div>
  </>
);

export default CardInner;
