import logo from "../assets/logo/zan-logo.svg";

const Navbar = () => {
  const navlinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about-me" },
    { name: "Experience", href: "#experience" },
  ];

 

  return (
    <nav className="bg-secondary fixed top-0 w-full z-50 px-6 md:px-16 lg:px-24 py-1 flex justify-between items-center">
      <a href="#" className="flex items-center gap-2">
        <img
          className="w-[56px] hover:cursor-pointer transition-transform hover:scale-105"
          src={logo}
          alt="Nazhmi Ahmad Fauzan Logo"
        />
      </a>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navlinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-display text-sm uppercase tracking-[2px] text-neutral-content/70 hover:text-primary transition-all duration-300 cursor-pointer"
          >
            {link.name}
          </a>
        ))}
      </div>

      <a
        href="/cv/Nazhmi Ahmad Fauzan_CV.pdf"
        download="CV_Nazhmi Ahmad Fauzan.pdf"
        className="btn-outline border border-primary text-primary py-1 px-2 hover:bg-primary/80 hover:text-primary-content transition-all duration-300 hidden cursor-pointer md:block"
      >
        Download CV
      </a>

      {/* Mobile hamburger placeholder */}
      <button className="md:hidden text-neutral-content text-2xl cursor-pointer">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;