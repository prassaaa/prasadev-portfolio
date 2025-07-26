import { motion } from "motion/react";

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  setSelectedProject,
  ...projectData
}) => {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={() => setSelectedProject({ title, description, image, tags, ...projectData })}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-storm to-indigo border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <img src="assets/arrow-up.svg" className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-aqua transition-colors duration-300 min-h-[3.5rem] flex items-start">
            {title}
          </h3>

          <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 rounded-lg border border-white/10"
              >
                <img
                  src={tag.path}
                  alt={tag.name}
                  className="w-4 h-4"
                />
                <span className="text-neutral-300 text-xs font-medium">
                  {tag.name}
                </span>
              </div>
            ))}
            {tags.length > 3 && (
              <div className="px-2.5 py-1.5 bg-white/5 rounded-lg border border-white/10">
                <span className="text-neutral-300 text-xs">
                  +{tags.length - 3}
                </span>
              </div>
            )}
          </div>

          {/* View More Button */}
          <div className="mt-auto">
            <button className="flex items-center gap-2 text-sand hover:text-aqua transition-colors duration-300 text-sm font-medium">
              <span>View Details</span>
              <img src="assets/arrow-right.svg" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-aqua/50 group-hover:to-mint/50 transition-all duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
