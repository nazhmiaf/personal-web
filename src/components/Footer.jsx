import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const socialLinks = [
  { name: "Email", href: "mailto:nazhmiahmadf@gmail.com", icon: <EmailIcon /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nazhmiaf/", icon: <LinkedInIcon /> },
  { name: "GitHub", href: "https://github.com/nazhmiaf", icon: <GitHubIcon /> },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-secondary-content/50 px-6 md:px-16 lg:px-24 py-8 bg-center bg-no-repeat bg-black border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Social links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, rotate: 5, color: "var(--color-primary, #C5A059)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="font-display text-xs uppercase tracking-[2px] hover:text-primary transition-colors flex items-center justify-center p-1"
              title={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-display text-xs tracking-wider">
          © {new Date().getFullYear()} Built with ❤️ by nazhmiaf.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
