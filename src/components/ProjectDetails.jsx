import { motion } from "motion/react";
import { useTranslation } from "../hooks/useTranslation";
import PropTypes from "prop-types";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  sourceCodeHref,
  closeModal,
}) => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm p-4">
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-full top-3 right-3 bg-midnight/50 hover:bg-midnight/80 transition-colors z-10"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="Close modal" />
        </button>
        <div className="max-h-[80vh] overflow-y-auto">
          <img src={image} alt={title} className="w-full rounded-t-2xl object-cover" />
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
            <p className="mb-4 font-normal text-neutral-400">{description}</p>
            {subDescription.map((subDesc, index) => (
              <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
            ))}
            <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
              <div className="flex gap-3">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    title={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                {href && href !== "#" && (
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-aqua/20 rounded-lg hover:bg-aqua/30 transition-colors hover-animation"
                  >
                    {t("common.liveDemo")}
                    <img src="assets/arrow-up.svg" className="size-4" alt="Live demo icon"/>
                  </a>
                )}
                {sourceCodeHref && sourceCodeHref !== "#" && (
                  <a 
                    href={sourceCodeHref} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors hover-animation"
                  >
                    {t("common.sourceCode")}
                    <img src="assets/logos/github.svg" className="size-4" alt="Source code icon"/>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// PropTypes validation
ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    path: PropTypes.string
  })).isRequired,
  href: PropTypes.string,
  sourceCodeHref: PropTypes.string,
  closeModal: PropTypes.func.isRequired
};

export default ProjectDetails;