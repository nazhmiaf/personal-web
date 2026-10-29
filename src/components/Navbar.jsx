import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FolderKanban, User, Briefcase, ArrowRight, Download } from "lucide-react";
import logo from "../assets/logo/zan-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { name: "Projects", href: "#projects", icon: FolderKanban },
    { name: "About", href: "#about-me", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-secondary/95 fixed top-0 w-full z-50 shadow-md backdrop-blur-sm border-b border-white/10"
    >
      <div className="px-6 md:px-16 lg:px-24 py-1 flex justify-between items-center">
        {/* Logo */}
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

        {/* Desktop Download CV button */}
        <motion.a
          href="/cv/Nazhmi Ahmad Fauzan-resume-oct26.pdf"
          download="CV_Nazhmi Ahmad Fauzan.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-outline border border-primary text-primary py-1 px-2 hover:bg-primary/80 hover:text-primary-content transition-all duration-300 hidden cursor-pointer md:block"
        >
          Download CV
        </motion.a>

        {/* Mobile Hamburger Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-neutral-content hover:text-primary p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden bg-secondary/98 backdrop-blur-xl px-6 py-5 flex flex-col gap-2 border-t border-white/10 shadow-2xl"
          >
            {navlinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={linkVariants}
                  whileTap={{ scale: 0.97, x: 4 }}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-sm uppercase tracking-[2px] text-neutral-content/85 hover:text-primary hover:bg-white/5 transition-all py-3 px-4 rounded-lg flex items-center justify-between border border-transparent hover:border-primary/20 group"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} className="text-primary group-hover:scale-110 transition-transform" />
                    {link.name}
                  </span>
                  <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </motion.a>
              );
            })}

            <motion.a
              variants={linkVariants}
              whileTap={{ scale: 0.97 }}
              href="/cv/Nazhmi Ahmad Fauzan_CV.pdf"
              download="CV_Nazhmi Ahmad Fauzan.pdf"
              onClick={() => setIsOpen(false)}
              className="btn-outline border border-primary text-primary py-3 px-4 hover:bg-primary hover:text-primary-content transition-all duration-300 text-center text-sm font-display uppercase tracking-wider flex items-center justify-center gap-2 rounded-lg mt-3 font-medium shadow-sm"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;