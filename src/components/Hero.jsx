import bgHero from "../assets/images/paper-texture-white.webp";

const Hero = () => {
  return (
    <section
      className="min-h-dvh bg-cover bg-center flex flex-col items-center justify-center bg-no-repeat text-center !px-6"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral leading-tight max-w-4xl">
        Code Crafter. Web Architect.
      </h1>

      <p className="font-body italic text-neutral/60 text-sm md:text-base mt-6 max-w-lg">
        Building scalable, high-performance web applications with clean code
        and modern technologies.
      </p>

      <a href="#projects" className="btn-outline-dark mt-10">
        View Work
      </a>
    </section>
  );
};

export default Hero;