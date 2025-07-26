"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-heading mb-4">My Work Experience</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-6">
          A journey through my professional development, showcasing the diverse projects
          and technologies I've worked with across different industries.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 text-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">4+</span>
            <span className="text-sm text-neutral-400">Years Experience</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">3</span>
            <span className="text-sm text-neutral-400">Companies</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">15+</span>
            <span className="text-sm text-neutral-400">Technologies</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-16 h-[1px] w-full" />

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-12 h-12 rounded-full -left-[18px] bg-gradient-to-br from-royal to-lavender border-2 border-white/20 shadow-lg">
                {item.icon ? (
                  <img src={item.icon} alt={item.job} className="w-6 h-6" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-white" />
                )}
              </div>
              <div className="flex-col hidden gap-3 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent">
                    {item.date}
                  </h3>
                  {item.status && (
                    <span className="px-2 py-1 text-xs font-medium bg-mint/20 text-mint rounded-full">
                      {item.status}
                    </span>
                  )}
                </div>
                <h3 className="text-3xl text-white font-bold">{item.title}</h3>
                <div className="flex items-center gap-2">
                  {item.companyIcon && (
                    <img src={item.companyIcon} alt={item.job} className="w-6 h-6" />
                  )}
                  <h3 className="text-2xl text-neutral-400 font-medium">{item.job}</h3>
                </div>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              {/* Mobile Header */}
              <div className="block mb-6 md:hidden">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent">
                    {item.date}
                  </h3>
                  {item.status && (
                    <span className="px-2 py-1 text-xs font-medium bg-mint/20 text-mint rounded-full">
                      {item.status}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <div className="flex items-center gap-2">
                  {item.companyIcon && (
                    <img src={item.companyIcon} alt={item.job} className="w-5 h-5" />
                  )}
                  <h3 className="text-base text-neutral-400 font-medium">{item.job}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                {item.contents.map((content, index) => (
                  <p className="mb-3 font-normal text-neutral-300 leading-relaxed" key={index}>
                    {content}
                  </p>
                ))}
              </div>

              {/* Skills/Tech Stack */}
              {item.skills && item.skills.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      >
                        {skill.icon && (
                          <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                        )}
                        <span className="text-sm font-medium text-neutral-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {item.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-aqua rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
