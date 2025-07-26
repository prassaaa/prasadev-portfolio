import { mySocials } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative c-space py-16">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-heading mb-4">Let&apos;s Stay Connected</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-6">
          Follow my journey, connect with me on social media, and let&apos;s build
          something amazing together.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              className="group relative p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.icon}
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                alt={social.name}
              />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
        <div className="flex items-center gap-4 text-sm text-neutral-400">
          <a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
        </div>

        <p className="text-sm text-neutral-400">
          © {currentYear} Prasetyo Ari Wibowo. All rights reserved.
        </p>

        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <span>Made with</span>
          <span className="text-red-500 animate-pulse">❤️</span>
          <span>using React & Three.js</span>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-aqua/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-mint/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
