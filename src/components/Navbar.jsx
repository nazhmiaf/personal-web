import { motion } from "framer-motion";
import logo from "../assets/logo/zan-logo.svg";

const Navbar = () => {
  const navlinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about-me" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-secondary fixed top-0 w-full z-50 px-6 md:px-16 lg:px-24 py-1 flex justify-between items-center shadow-md backdrop-blur-sm bg-secondary/95"
    >
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2"
      >
        <img
          className="w-[56px] hover:cursor-pointer"
          src={logo}
          alt="Nazhmi Ahmad Fauzan Logo"
        />
      </motion.a>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navlinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            whileHover={{ y: -2, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="font-display text-sm uppercase tracking-[2px] text-neutral-content/70 hover:text-primary transition-colors cursor-pointer"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <motion.a
        href="/cv/Nazhmi Ahmad Fauzan_CV.pdf"
        download="CV_Nazhmi Ahmad Fauzan.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-outline border border-primary text-primary py-1 px-2 hover:bg-primary/80 hover:text-primary-content transition-all duration-300 hidden cursor-pointer md:block"
      >
        Download CV
      </motion.a>

    </motion.nav>
  );
};

export default Navbar;