import Link from "next/link";
import LangSwitch from "../common/LangSwitch";

const HorizontalMenus = ({ locationClickHandler, lifeStyleClickHandler }) => {
  return (
    <>
      <Link
        href="/#the-project"
        className="horizontal-menu hidden 2xl:block bg-[#24211E] rounded-full text-white min-h-[100px] py-10 px-8"
      >
        The project
      </Link>
      <Link
        href="/#our-units"
        className="horizontal-menu hidden 2xl:block bg-[#24211E] rounded-full text-white min-h-[100px] py-10 px-8"
      >
        Our units
      </Link>
      <Link
        href="/#aminities"
        className="horizontal-menu hidden 2xl:block bg-[#24211E] rounded-b rounded-full text-white min-h-[100px] py-10 px-8"
      >
        Amenities
      </Link>
      <Link
        onClick={locationClickHandler}
        href="/#location-life-style"
        className="horizontal-menu hidden 2xl:block bg-[#24211E] rounded-full text-white min-h-[100px] py-10 px-8"
      >
        Localisation
      </Link>
      <Link
        onClick={lifeStyleClickHandler}
        href="/#location-life-style"
        className="horizontal-menu hidden 2xl:block bg-[#24211E] rounded-t rounded-full text-white min-h-[100px] py-10 px-8"
      >
        Lifestyle
      </Link>
      <Link
        href="/#contact-us"
        className="horizontal-menu hidden 2xl:block bg-[#24211E] rounded-full text-white min-h-[100px] py-10 px-1.5"
      >
        Contact
      </Link>

      <div className="horizontal-menu hidden bg-[#E8E1CF] h-24 w-24 rounded-full 2xl:flex items-center justify-center">
        <LangSwitch />
      </div>
    </>
  );
};

export default HorizontalMenus;
