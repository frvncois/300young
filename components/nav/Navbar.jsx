"use client";
import {
  locationLifeStyleInData,
  locationLifeStyleInitialData,
  translate,
} from "@/jotai/jotaiManager";
import CloseIcon from "@/public/icons/CloseIcon";
import HumberIcon from "@/public/icons/HumberIcon";
import YoungLogo from "@/components/icons/YoungLogo";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import LangSwitch from "../common/LangSwitch";
import HorizontalMenus from "./HorizontalMenus";
import VerticalMenus from "./VerticalMenus";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const path = usePathname();
  const container = useRef();
  const [t] = useAtom(translate);
  const [, setLocationLifeStyleData] = useAtom(locationLifeStyleInData);
  const isEng = path.includes("/en") || path.includes("/en/");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.set(".horizontal-menu", { x: "100dvw", opacity: 0 });
      gsap.set(".vertical-menu", { y: "-100dvw", opacity: 0 });
      gsap.set(".vertical-menu-container", { display: "none" });
    },
    { scope: container }
  );

  // console.log({ t });

  const pageIsExist =
    path.startsWith("/en/article/") ||
    path.startsWith("/article/") ||
    path === "/en/privacy-policy" ||
    path === "/privacy-policy" ||
    path === "/" ||
    path === "/en/" ||
    path === "/en";

  if (!pageIsExist) {
    return;
  }

  const handleOnClickMenu = () => {
    const mm = gsap.matchMedia(container);

    mm.add(
      {
        isLargeScreen: "(min-width: 1678px)",
        isMediumScreen: "(min-width: 768px) and (max-width: 1677px)",
        isSmallScreen: "(max-width: 767px)",
      },
      (context) => {
        let { isLargeScreen, isMediumScreen, isSmallScreen } =
          context.conditions;

        if (isLargeScreen) {
          if (!isMenuOpen) {
            gsap.to(".horizontal-menu", { x: "0dvw", opacity: 1 });
          } else {
            gsap.to(".horizontal-menu", { x: "100dvw", opacity: 0 });
          }
          setIsMenuOpen(!isMenuOpen);
        } else if (isMediumScreen) {
          if (!isMenuOpen) {
            gsap.set(".vertical-menu-container", { display: "flex" });
            gsap.to(".vertical-menu", { y: "0dvw", opacity: 1 });
          } else {
            gsap.to(".vertical-menu", {
              y: "-70dvh",
              opacity: 0,
              onComplete: () =>
                gsap.set(".vertical-menu-container", { display: "none" }),
            });
          }
          setIsMenuOpen(!isMenuOpen);
        } else if (isSmallScreen) {
          // TODO::For small screen
        }
      }
    );
  };

  const locationClickHandler = () => {
    setLocationLifeStyleData([...locationLifeStyleInitialData]);
    handleOnClickMenu();
  };

  const lifeStyleClickHandler = () => {
    const reverserArray = [...locationLifeStyleInitialData].reverse();
    setLocationLifeStyleData(reverserArray);
    handleOnClickMenu();
  };

  return (
    <>
      <div className="fixed z-50 h-4 lg:h-8 container backdrop-blur-[1px]"></div>
      <div
        ref={container}
        className="fixed z-50 top-4 lg:top-8 pb-4 lg:pb-8 w-full flex flex-col justify-center items-center"
      >
        <div className="container backdrop-blur-[1px] flex justify-between items-center text-xl uppercase overflow-x-hidden">
          <Link
            href="/"
            className="bg-primary h-14 w-14 md:h-[100px] md:w-[100px] rounded-full flex justify-center items-center text-black2"
          >
            <YoungLogo className="w-[27px] h-[35px] md:w-[52px] md:h-[68px]" />
          </Link>

          <HorizontalMenus
            locationClickHandler={locationClickHandler}
            lifeStyleClickHandler={lifeStyleClickHandler}
          />

          <button
            onClick={handleOnClickMenu}
            className="hidden bg-black2 h-[100px] w-[100px] rounded-full md:flex flex-col justify-center items-center text-white text-sm cursor-pointer"
          >
            <div className="p-2">
              {!isMenuOpen ? <HumberIcon /> : <CloseIcon />}
            </div>
            <span>Menu</span>
          </button>

          <div className="md:hidden bg-blanc-cream h-14 w-14 rounded-full flex flex-col justify-center items-center text-white *:text-sm cursor-pointer">
            <LangSwitch />
          </div>
        </div>

        <VerticalMenus
          locationClickHandler={locationClickHandler}
          lifeStyleClickHandler={lifeStyleClickHandler}
          onClose={handleOnClickMenu}
        />
      </div>
      <div className="hidden">
        <div className="flex gap-4">
          {t?.navigation?.links?.map((link) => (
            <Link key={link.name} href={`${isEng ? "/en" : ""}/${link?.href}`}>
              {link?.name}
              <br />
              {`${isEng ? "/en" : ""}/${link?.href}`}
            </Link>
          ))}
        </div>
        <LangSwitch />
      </div>
    </>
  );
}

export default Navbar;
