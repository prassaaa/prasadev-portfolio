import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { useTranslation } from "../hooks/useTranslation";

const About = () => {
  const grid2Container = useRef();
  const { t } = useTranslation();

  return (
    <section className="c-space section-spacing" id="about">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-heading mb-4">{t("about.title")}</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-6">
          {t("about.subtitle")}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 text-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">4+</span>
            <span className="text-sm text-neutral-400">{t("about.stats.years")}</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">20+</span>
            <span className="text-sm text-neutral-400">{t("about.stats.skills")}</span>
          </div>

          <div className="w-px h-12 bg-neutral-700"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">∞</span>
            <span className="text-sm text-neutral-400">{t("about.stats.mindset")}</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-16 h-[1px] w-full" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">{t("about.intro.title")}</p>
            <p className="subtext">
              {t("about.intro.description")}
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">{t("about.timezone.title")}</p>
            <p className="subtext">
              {t("about.timezone.description")}
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              {t("about.collaboration.title")}
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">{t("about.techstack.title")}</p>
            <p className="subtext">
              {t("about.techstack.description")}
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
