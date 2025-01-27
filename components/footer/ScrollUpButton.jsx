import { ArrowUpIcon } from "@heroicons/react/20/solid";

const ScrollUpButton = () => {
  const handleScroll = () => {
    // gsap.to(window, { scrollTo: 0 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleScroll}
      className="absolute z-10 bg-[#E8E1CF] lg:bg-black2 bottom-[148px] lg:-top-[128px] right-6 md:right-[18.75%] h-[68px] md:h-[128px] w-[68px] md:w-[128px] flex flex-col justify-center items-center gap-0.5 md:gap-1 rounded-full text-black2 lg:text-white text-[10px] md:text-base uppercase cursor-pointer"
    >
      <ArrowUpIcon className="w-4 md:w-7 h-4 md:h-7" />
      <span>Scroll Up</span>
    </div>
  );
};

export default ScrollUpButton;
