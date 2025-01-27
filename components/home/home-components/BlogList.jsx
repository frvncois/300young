import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const articleList = [
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-1.png",
    className: "rounded-x",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-2.png",
    className: "rounded-b",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-3.png",
    className: "rounded-x",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-4.png",
    className: "rounded-t",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-5.png",
    className: "rounded-t",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-6.png",
    className: "rounded-l",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-7.png",
    className: "rounded-x",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-8.png",
    className: "rounded-x",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-9.png",
    className: "rounded-x",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-10.png",
    className: "rounded-x",
    link: "",
  },
  {
    title: "Article title",
    shortDescription:
      "Immerse yourself in the captivating world of contemporary architecture and interior design, where innovation meets comfort to redefine the way we live.",
    imageSrc: "/assets/Blog-11.png",
    className: "rounded-t",
    link: "",
  },
];

const BlogList = () => {
  const router = useRouter();

  const container = useRef();
  const displayNumber = 8;
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    if (!showAll) {
      const mm = gsap.matchMedia(container);

      mm.add(
        {
          is2XLScreen: "(min-width: 1678px)",
          isXLScreen: "(min-width: 1280px) and (max-width: 1677px)",
          isLGScreen: "(min-width: 1024px) and (max-width: 1279px)",
          isMDScreen: "(min-width: 768px) and (max-width: 1023px)",
          isSmallScreen: "(max-width: 767px)",
        },
        (context) => {
          let {
            is2XLScreen,
            isXLScreen,
            isLGScreen,
            isMDScreen,
            isSmallScreen,
          } = context.conditions;

          if (is2XLScreen) {
            gsap.to(".rest-list-container", { height: 312 });
          } else if (isXLScreen) {
            gsap.to(".rest-list-container", { height: 274 });
          } else if (isLGScreen) {
            gsap.to(".rest-list-container", { height: 274 * 2 + 32 });
          } else if (isMDScreen) {
            gsap.to(".rest-list-container", { height: 125 * 2 + 20 });
          } else if (isSmallScreen) {
            gsap.to(".rest-list-container", { height: 125 * 3 + 20 * 2 });
          }
        }
      );
    } else {
      gsap.to(".rest-list-container", { height: 0 });
    }
    setShowAll(!showAll);
  };

  return (
    <div
      ref={container}
      className="container py-20 2xl:pt-[200px] 2xl:pb-[100px]"
      id="blogs"
    >
      <h2 className="text-4xl lg:text-[66px] font-bold uppercase">Blog</h2>
      <div className="mt-6 lg:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-8">
        {articleList.map((article, index) => {
          return (
            <>
              {index < displayNumber && (
                <div
                  key={index}
                  onClick={() => router.push("/article/test")}
                  className={cn(
                    "group min-h-[122px] lg:min-h-[274px] 2xl:min-h-[312px] py-[30px] md:py-7 lg:py-14 2xl:py-[90px] 2xl:pt-[94px] px-10 lg:px-16 2xl:px-[60px] space-y-1 md:space-y-2 text-white lg:hover:text-[#24211E] bg-center lg:bg-cover xl:bg-contain bg-no-repeat relative overflow-hidden",
                    {
                      "rounded-b-[104px] lg:rounded-b-[200px]":
                        article.className === "rounded-b",
                    },
                    {
                      "rounded-t-[104px] lg:rounded-t-[200px]":
                        article.className === "rounded-t",
                    },
                    { "rounded-l-[200px]": article.className === "rounded-l" },
                    { "rounded-r-[200px]": article.className === "rounded-r" },
                    {
                      "rounded-[200px]": article.className === "rounded-x",
                    }
                  )}
                >
                  <Image
                    className="absolute -z-10 top-0 right-0 w-full h-full object-cover object-center lg:group-hover:opacity-0"
                    src={article.imageSrc}
                    alt={article.title}
                    width={400}
                    height={276}
                  />

                  <h4 className="font-semibold text-base lg:text-2xl lg:group-hover:-translate-y-3.5 transition duration-500">
                    {article.title}
                  </h4>

                  <p className="text-[10px] lg:text-sm !leading-[110%] lg:group-hover:-translate-y-3.5 transition duration-500">
                    {article.shortDescription}
                  </p>

                  <div className="hidden xl:block absolute left-0 w-full px-[60px] -translate-y-3.5 opacity-0 group-hover:opacity-100">
                    <button className="w-full py-1 bg-[#24211E] text-white cursor-pointer">
                      Learn more
                    </button>
                  </div>

                  <div className="absolute -z-10 -top-2 right-0 w-full h-full lg:group-hover:bg-[#E0A94F]"></div>
                </div>
              )}
            </>
          );
        })}
      </div>

      <div className="rest-list-container h-0 overflow-hidden mt-5 lg:mt-8 mb-3 lg:mb-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-8">
        {articleList.map((article, index) => {
          return (
            <>
              {index >= displayNumber && (
                <div
                  key={index}
                  onClick={() => router.push("/article/test")}
                  className={cn(
                    "group min-h-[122px] lg:min-h-[274px] 2xl:min-h-[312px] py-[30px] md:py-7 lg:py-14 2xl:py-[90px] 2xl:pt-[94px] px-10 lg:px-16 2xl:px-[60px] space-y-1 md:space-y-2 text-white lg:hover:text-[#24211E] bg-center lg:bg-cover xl:bg-contain bg-no-repeat relative overflow-hidden",
                    {
                      "rounded-b-[104px] lg:rounded-b-[200px]":
                        article.className === "rounded-b",
                    },
                    {
                      "rounded-t-[104px] lg:rounded-t-[200px]":
                        article.className === "rounded-t",
                    },
                    { "rounded-l-[200px]": article.className === "rounded-l" },
                    { "rounded-r-[200px]": article.className === "rounded-r" },
                    {
                      "rounded-[200px]": article.className === "rounded-x",
                    }
                  )}
                >
                  <Image
                    className="absolute -z-10 top-0 right-0 w-full h-full object-cover object-center lg:group-hover:opacity-0"
                    src={article.imageSrc}
                    alt={article.title}
                    width={400}
                    height={276}
                  />

                  <h4 className="font-semibold text-base lg:text-2xl lg:group-hover:-translate-y-3.5 transition duration-500">
                    {article.title}
                  </h4>

                  <p className="text-[10px] lg:text-sm !leading-[110%] lg:group-hover:-translate-y-3.5 transition duration-500">
                    {article.shortDescription}
                  </p>

                  <div className="hidden xl:block absolute left-0 w-full px-[60px] -translate-y-3.5 opacity-0 group-hover:opacity-100">
                    <button className="w-full py-1 bg-[#24211E] text-white cursor-pointer">
                      Learn more
                    </button>
                  </div>

                  <div className="absolute -z-10 -top-2 right-0 w-full h-full lg:group-hover:bg-[#E0A94F]"></div>
                </div>
              )}
            </>
          );
        })}
      </div>

      <div className="grid grid-cols-12 md:gap-8">
        <div className="md:col-span-6 xl:col-span-9"></div>
        <button
          onClick={handleShowAll}
          className="col-span-12 md:col-span-6 xl:col-span-3 py-2 bg-[#24211E] hover:bg-[#E0A94F] text-xl uppercase text-white hover:text-[#24211E]"
        >
          {showAll ? "See less" : "View all articles"}
        </button>
      </div>
    </div>
  );
};

export default BlogList;
