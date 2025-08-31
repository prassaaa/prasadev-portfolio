import { useTranslation } from "../hooks/useTranslation";
import PropTypes from 'prop-types';

const ServiceCard = ({ icon, title, description, className }) => (
  <div className={`bg-gradient-to-br from-storm to-indigo p-6 rounded-2xl border border-gray-50/[.1] hover-animation transition-all duration-300 hover:from-royal hover:to-lavender hover:border-aqua/30 ${className}`}>
    <div className="flex items-center gap-4 mb-4">
      <img src={icon} alt={title} className="w-10 h-10" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-neutral-400 text-base leading-relaxed">{description}</p>
  </div>
);

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const Services = () => {
  const { t } = useTranslation();
  const servicesData = t("services.data");

  return (
    <section id="services" className="c-space section-spacing">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-heading mb-4">{t("services.title")}</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          {t("services.subtitle")}
        </p>
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => {
          let className = "";
          if (index === 0) {
            className = "md:col-span-2"; // First item takes full width
          } else if (index === 1) {
            className = "md:col-span-1"; // Second item
          } else if (index === 2) {
            className = "md:col-span-1"; // Third item
          } else if (index === 3) {
            className = "md:col-span-2"; // Fourth item takes full width
          }
          return <ServiceCard key={index} {...service} className={className} />;
        })}
      </div>
    </section>
  );
};

export default Services;