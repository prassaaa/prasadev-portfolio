import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { useTranslation } from "../hooks/useTranslation";

const HeroText = () => {
  const { t } = useTranslation();
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-32 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.div
          className="mb-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
            {t("hero.greeting")} {t("hero.name")}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-aqua to-mint mt-2"></div>
        </motion.div>

        <div className="flex flex-col items-start mb-6">
          <motion.p
            className="text-4xl font-bold text-neutral-200 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            {t("hero.title")}
          </motion.p>

          <motion.div
            className="my-3"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-6xl text-white"
              style={{
                background: 'linear-gradient(to right, #00d4ff, #00ff88, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            />
          </motion.div>

          <motion.p
            className="text-3xl font-bold text-neutral-200"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-lg text-neutral-400 mb-6 max-w-xl leading-relaxed font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.1 }}
        >
          {t("hero.tagline")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 items-start"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.4 }}
        >
          <button
            onClick={() => scrollToSection('work')}
            className="group relative px-6 py-3 bg-gradient-to-r from-aqua to-mint text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-aqua/25 hover:-translate-y-1"
          >
            <span className="relative z-10">{t("hero.viewWork")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-mint to-aqua opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-aqua hover:text-aqua hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              {t("hero.connect")}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          className="flex items-center gap-2 mt-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.7 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
            <span className="text-neutral-300 text-sm font-medium">{t("hero.available")}</span>
          </div>
        </motion.div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden px-4">
        <motion.div
          className="mb-3"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
            {t("hero.greeting")} {t("hero.name")}
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-aqua to-mint mt-2 mx-auto"></div>
        </motion.div>

        <div className="space-y-3">
          <motion.p
            className="text-2xl font-bold text-neutral-200 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            {t("hero.building")}
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-4xl text-white"
              style={{
                background: 'linear-gradient(to right, #00d4ff, #00ff88, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            />
          </motion.div>

          <motion.p
            className="text-2xl font-bold text-neutral-200"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            {t("hero.webApps")}
          </motion.p>
        </div>

        {/* Mobile Tagline */}
        <motion.p
          className="text-base text-neutral-400 leading-relaxed px-2 font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.1 }}
        >
          {t("hero.taglineMobile")}
        </motion.p>

        {/* Mobile CTA Buttons */}
        <motion.div
          className="flex flex-col gap-2 items-center mt-4"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.4 }}
        >
          <button
            onClick={() => scrollToSection('work')}
            className="w-full max-w-xs group relative px-5 py-2.5 bg-gradient-to-r from-aqua to-mint text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-aqua/25"
          >
            <span className="relative z-10">{t("hero.viewWork")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-mint to-aqua opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full max-w-xs group px-5 py-2.5 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-aqua hover:text-aqua"
          >
            <span className="flex items-center justify-center gap-2">
              {t("hero.connect")}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Mobile Status Indicator */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.7 }}
        >
          <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
          <span className="text-neutral-300 text-xs font-medium">{t("hero.availableMobile")}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
