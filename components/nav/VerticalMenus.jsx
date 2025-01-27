import React from "react";
import LangSwitch from "../common/LangSwitch";
import Link from "next/link";

const VerticalMenus = ({
  locationClickHandler,
  lifeStyleClickHandler,
  onClose,
}) => {
  return (
    <div className="container vertical-menu-container hidden 2xl:hidden mt-4 w-full lg:flex flex-col gap-5 justify-center items-end text-center text-xl overflow-y-hidden">
      <Link
        href="/#the-project"
        onClick={onClose}
        className="vertical-menu min-w-[220px] bg-[#24211E] rounded-[20px] rounded-bl-none text-white py-4 px-12"
      >
        The project
      </Link>
      <Link
        href="/#our-units"
        onClick={onClose}
        className="vertical-menu min-w-[220px] bg-[#24211E] rounded-[20px] text-white py-4 px-12"
      >
        Our units
      </Link>
      <Link
        href="/#aminities"
        onClick={onClose}
        className="vertical-menu min-w-[220px] bg-[#24211E] rounded-full rounded-b text-white py-4 px-12"
      >
        Amenities
      </Link>
      <Link
        onClick={locationClickHandler}
        href="/#location-life-style"
        className="vertical-menu min-w-[220px] bg-[#24211E] rounded-[20px] text-white py-4 px-12"
      >
        Localisation
      </Link>
      <Link
        onClick={lifeStyleClickHandler}
        href="/#location-life-style"
        className="vertical-menu min-w-[220px] bg-[#24211E] rounded-t rounded-full text-white py-4 px-12"
      >
        Lifestyle
      </Link>
      <Link
        href="/#contact-us"
        onClick={onClose}
        className="vertical-menu min-w-[220px] bg-[#24211E] rounded-[20px] text-white py-4 px-12"
      >
        Contact
      </Link>
      <Link
        href="/#blogs"
        onClick={onClose}
        className="vertical-menu min-w-[220px] bg-[#24211E] rounded-[20px] rounded-t text-white py-4 px-12"
      >
        Blog
      </Link>
      <div className="vertical-menu min-w-[220px] bg-[#E8E1CF] rounded-[20px] rounded-b text-white py-4 px-12">
        <LangSwitch />
      </div>
    </div>
  );
};

export default VerticalMenus;
