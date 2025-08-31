import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import FeaturedProject from "../components/FeaturedProject";
import ProjectDetails from "../components/ProjectDetails";
import { useTranslation } from "../hooks/useTranslation";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();
  const myProjects = t("projects.data");

  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Split projects: first one as featured, rest as grid
  const featuredProject = myProjects[0];
  const gridProjects = myProjects.slice(1);

  return (
    <section id="work" className="relative c-space section-spacing">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-heading mb-4">{t("projects.title")}</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-6">
          {t("projects.subtitle")}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 text-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">{myProjects.length}</span>
            <span className="text-sm text-neutral-400">{t("projects.stats.completed")}</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">10+</span>
            <span className="text-sm text-neutral-400">{t("projects.stats.technologies")}</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">100%</span>
            <span className="text-sm text-neutral-400">{t("projects.stats.satisfaction")}</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-16 h-[1px] w-full" />

      {/* Featured Project */}
      <div className="mb-20">
        <FeaturedProject
          {...featuredProject}
          setSelectedProject={setSelectedProject}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {gridProjects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails
          {...selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}

      {/* CTA Button */}
      <div className="mt-20 text-center">
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, "#contact")}
          className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white transition-colors rounded-lg bg-aqua/20 hover:bg-aqua/30 hover-animation"
        >
          <span>{t("contact.title")}</span>
          <img src="assets/arrow-right.svg" className="size-5" alt="Contact icon"/>
        </a>
      </div>
    </section>
  );
};

export default Projects;
