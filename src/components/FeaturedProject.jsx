import { motion } from "motion/react";
import { useTranslation } from "../hooks/useTranslation";
import PropTypes from "prop-types";

const FeaturedProject = ({
  title,
  description,
  image,
  tags,
  setSelectedProject,
  ...projectData
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-storm to-indigo"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => setSelectedProject({ title, description, image, tags, ...projectData })}
    >
      {/* Background Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Featured Badge */}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-2 bg-gradient-to-r from-royal to-lavender rounded-full text-sm font-medium text-white">
            ⭐ {t("projects.featured")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="mb-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-neutral-200 text-lg leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            >
              <img
                src={tag.path}
                alt={tag.name}
                className="w-5 h-5"
              />
              <span className="text-white text-sm font-medium">
                {tag.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aqua to-mint rounded-lg text-black font-medium hover:shadow-lg hover:shadow-aqua/25 transition-all duration-300 hover:-translate-y-1">
            <span>Explore Project</span>
            <img src="assets/arrow-right.svg" className="w-5 h-5" />
          </button>
          
          <div className="text-neutral-300 text-sm">
            Click to view details
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal/20 to-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

// PropTypes validation
FeaturedProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    path: PropTypes.string
  })).isRequired,
  setSelectedProject: PropTypes.func.isRequired
};

export default FeaturedProject;
