import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const socialLinks = [
  { name: "Email", href: "mailto:[EMAIL_ADDRESS]", icon: <EmailIcon /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nazhmiaf/", icon: <LinkedInIcon /> },
  { name: "GitHub", href: "https://github.com/nazhmiaf", icon: <GitHubIcon /> },
];

const Footer = () => {
  return (
    <footer
      className="text-secondary-content/50 px-6 md:px-16 lg:px-24 py-8 bg-center bg-no-repeat bg-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Social links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-xs uppercase tracking-[2px] hover:text-primary transition-colors"
            >
              {link.icon} 
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-display text-xs tracking-wider">
          © {new Date().getFullYear()} Built with ❤️ by nazhmiaf.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
