import { useGSAP } from "@gsap/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { gsap } from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const BottomBar = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.set(".mobile-menu", { y: "100dvw", opacity: 0 });
    },
    { scope: container }
  );

  const handleOnClickMenu = () => {
    if (!isMenuOpen) {
      gsap.set(".mobile-menu-container", { display: "flex" });
      gsap.to(".mobile-menu", { y: "0dvw", opacity: 1 });
    } else {
      gsap.to(".mobile-menu", {
        y: "100dvw",
        opacity: 0,
        onComplete: () =>
          gsap.set(".mobile-menu-container", { display: "none" }),
      });
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        ref={container}
        className="fixed mobile-menu-container z-50 right-0 bottom-20 lg:hidden hidden gap-3 flex-col justify-center items-end text-center text-xs pr-4"
      >
        <Link
          href="/#the-project"
          onClick={handleOnClickMenu}
          className="mobile-menu max-w-[168px] w-full bg-[#24211E] rounded-[20px] rounded-bl-none text-white py-4 px-12"
        >
          The project
        </Link>
        <Link
          href="/#our-units"
          onClick={handleOnClickMenu}
          className="mobile-menu max-w-[168px] w-full bg-[#24211E] rounded-[20px] text-white py-4 px-12"
        >
          Our units
        </Link>
        <Link
          href="/#aminities"
          onClick={handleOnClickMenu}
          className="mobile-menu max-w-[168px] w-full bg-[#24211E] rounded-full rounded-b text-white py-4 px-12"
        >
          Amenities
        </Link>
        <Link
          href="/#location-life-style"
          onClick={handleOnClickMenu}
          className="mobile-menu max-w-[168px] w-full bg-[#24211E] rounded-[20px] text-white py-4 px-12"
        >
          Localisation
        </Link>
        <Link
          href="/#contact-us"
          onClick={handleOnClickMenu}
          className="mobile-menu max-w-[168px] w-full bg-[#24211E] rounded-[20px] text-white py-4 px-12"
        >
          Contact
        </Link>
        <Link
          href="/#blogs"
          onClick={handleOnClickMenu}
          className="mobile-menu max-w-[168px] w-full bg-[#24211E] rounded-[20px] rounded-t text-white py-4 px-12"
        >
          Blog
        </Link>
      </div>
      <div className="z-50 fixed right-0 bottom-0 md:hidden container py-3 bg-[#24211E] grid grid-cols-2 gap-4">
        <Link
          href="/#contact-us"
          className="flex justify-center py-2 border border-white rounded-[20px] rounded-br-none text-white"
        >
          Contact
        </Link>
        <button
          onClick={handleOnClickMenu}
          className="rounded-[20px] bg-[#E0A94F] text-[#24211E] flex justify-center items-center gap-1"
        >
          Menu
          <span className="">
            <ChevronDownIcon className="h-4 w-4 rotate-0 transition-transform duration-500 ease-in-out" />
          </span>
        </button>
      </div>
    </>
  );
};

export default BottomBar;
