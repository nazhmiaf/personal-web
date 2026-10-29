import { motion } from "framer-motion";
import bgHero from "../assets/images/paper-texture-white.webp";

const Hero = () => {
  return (
    <section
      className="min-h-dvh bg-cover bg-center flex flex-col items-center justify-center bg-no-repeat text-center !px-6"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral leading-tight max-w-4xl"
      >
        Code Crafter. Web Architect.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="font-body italic text-neutral/80 text-sm md:text-base mt-6 max-w-lg"
      >
        Building scalable, high-performance web applications with clean code
        and modern technologies.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-outline-dark mt-10 inline-block"
      >
        View Work
      </motion.a>
    </section>
  );
};

export default Hero;