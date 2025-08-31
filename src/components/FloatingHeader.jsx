import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "../hooks/useTranslation";

const FloatingHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  // Define navItems with translations using useMemo to prevent re-renders
  const navItems = useMemo(() => [
    { id: "home", label: t("nav.home"), href: "#home" },
    { id: "about", label: t("nav.about"), href: "#about" },
    { id: "services", label: t("nav.services"), href: "#services" },
    { id: "work", label: t("nav.projects"), href: "#work" },
    { id: "experience", label: t("nav.experience"), href: "#experience" },
    { id: "contact", label: t("nav.contact"), href: "#contact" },
  ], [t]);

  useEffect(() => {
    // Show header immediately on load
    setIsVisible(true);

    const handleScroll = () => {
      // Keep header visible always, but you can add conditions here if needed
      setIsVisible(true);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        // If at the very top, set to home
        setActiveSection("home");
      }
    };

    // Call once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl"
        >
          {/* Main Header Container */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => scrollToSection("#home")}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-aqua to-mint rounded-lg flex items-center justify-center">
                  <svg 
                    className="w-5 h-5 text-black font-bold" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.5 8.5L11 11l-2.5 2.5L10 15l4-4-4-4L8.5 8.5zM14 17h2v-2h-2v2z"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-lg hidden sm:block">Prasadev</span>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-aqua/20 to-mint/20 border border-aqua/30 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.button>
                ))}
              </nav>

              {/* Language Switcher & Mobile Menu */}
              <div className="flex items-center gap-2">
                {/* Language Switcher (Always Visible) */}
                <motion.button
                  onClick={toggleLanguage}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">
                      {language === 'en' ? '🇺🇸' : '🇮🇩'}
                    </span>
                    <span className="text-xs font-medium text-neutral-300 hidden sm:block">
                      {language.toUpperCase()}
                    </span>
                  </div>
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-white hover:text-aqua transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="pt-4 pb-2 border-t border-white/10 mt-4">
                    <nav className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.href)}
                          className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            activeSection === item.id
                              ? "text-white bg-gradient-to-r from-aqua/20 to-mint/20 border border-aqua/30"
                              : "text-neutral-400 hover:text-white hover:bg-white/5"
                          }`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>


        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default FloatingHeader;
