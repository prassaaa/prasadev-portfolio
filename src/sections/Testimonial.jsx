import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
import { useTranslation } from "../hooks/useTranslation";
import PropTypes from "prop-types";
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, role, company, body, rating, project, result }) => {
  const { t } = useTranslation();
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <figure
      className={twMerge(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6 border-gray-50/[.1] bg-gradient-to-br from-storm to-indigo hover:from-royal hover:to-lavender hover-animation transition-all duration-300"
      )}
    >
      {/* Header */}
      <div className="flex flex-row items-start gap-3 mb-4">
        <img
          className="rounded-full bg-white/10 border-2 border-white/20"
          width="48"
          height="48"
          alt={name}
          src={img}
        />
        <div className="flex flex-col flex-1">
          <figcaption className="text-base font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-aqua">{role}</p>
          <p className="text-xs text-white/60">{company}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex">{renderStars(rating)}</div>
        <span className="text-sm text-white/80">({rating}/5)</span>
      </div>

      {/* Project Tag */}
      {project && (
        <div className="mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-mint/20 text-mint rounded-full">
            {project}
          </span>
        </div>
      )}

      {/* Testimonial */}
      <blockquote className="text-sm text-white/90 leading-relaxed mb-4 line-clamp-4">
        &ldquo;{body}&rdquo;
      </blockquote>

      {/* Result */}
      {result && (
        <div className="mt-auto pt-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-mint rounded-full"></div>
            <p className="text-xs font-medium text-mint">
              {t("testimonials.result")}: {result}
            </p>
          </div>
        </div>
      )}
    </figure>
  );
};

// PropTypes validation for ReviewCard
ReviewCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  project: PropTypes.string,
  result: PropTypes.string
};

export default function Testimonial() {
  const { t } = useTranslation();
  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-heading mb-4">{t("testimonials.title")}</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-6">
          {t("testimonials.subtitle")}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 text-center">
          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-1 mb-1">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${
                    index < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-white">{averageRating}</span>
            <span className="text-sm text-neutral-400">{t("testimonials.stats.rating")}</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">{reviews.length}</span>
            <span className="text-sm text-neutral-400">{t("testimonials.stats.clients")}</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">100%</span>
            <span className="text-sm text-neutral-400">{t("testimonials.stats.success")}</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-16 h-[1px] w-full" />

      {/* Testimonials Marquee */}
      <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={`first-${index}`} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={`second-${index}`} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
