import bgTexture from "../assets/images/texture-paper-black.webp";

const Cta = () => {
  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-no-repeat text-center text-secondary-content"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <div className="max-w-3xl mx-auto py-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-content leading-tight">
          Let's build something together.
        </h2>

        <p className="text-secondary-content/70 mt-6 max-w-lg mx-auto text-sm md:text-base">
          Available for full-time remote opportunities, freelance projects and
          creative collaborations.
        </p>

        <a
          href="mailto:nazhmiahmadf@gmail.com"
          className="inline-flex items-center gap-2 font-display text-lg md:text-xl text-primary hover:text-primary/80 transition-colors mt-8 group"
        >
          nazhmiahmadf@gmail.com
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default Cta;
