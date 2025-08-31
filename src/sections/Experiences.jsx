import { Timeline } from "../components/Timeline";
import { useTranslation } from "../hooks/useTranslation";

const Experiences = () => {
  const { t } = useTranslation();
  const experiences = t("experience.data");
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;