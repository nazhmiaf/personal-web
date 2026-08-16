import { motion } from "framer-motion";
import bgTexture from "../assets/images/texture-paper-black.webp";

const Cta = () => {
  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-no-repeat text-center text-secondary-content overflow-hidden"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto py-8"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-content leading-tight">
          Let's build something together.
        </h2>

        <p className="text-secondary-content/70 mt-6 max-w-lg mx-auto text-sm md:text-base">
          Available for full-time remote opportunities, freelance projects and
          creative collaborations.
        </p>

        <motion.a
          href="mailto:nazhmiahmadf@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 font-display text-lg md:text-xl text-primary hover:text-primary/80 transition-colors mt-8 group"
        >
          nazhmiahmadf@gmail.com
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-block"
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Cta;
