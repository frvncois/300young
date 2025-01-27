import AdvantageComponent from "@/components/home/home-components/AdvantageComponent";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import React from "react";

const ArticleText = ({ title, text }) => {
  return (
    <div className="mb-[30px]">
      <h3 className="sm:text-[36px] text-[20px] sm:leading-[46px] leading-[25px] font-bold uppercase mb-2.5">
        {title}
      </h3>
      <p className="sm:text-[22px] text-[14px] sm:leading-[33px] leading-[21px] font-normal">{text}</p>
    </div>
  );
};

function Article() {
  const data = {
    title: "Welcome to Montreal:",
    subTitle: "An Exciting Adventure for All Newcomers",
    date: "January 31, 2023",
    shortDescription:
      "Montreal, the cultural metropolis of Canada, is a dynamic and welcoming city that draws people from all over the world. Those just arriving in this cosmopolitan hub, can look forward to a real adventure. Discovering Montreal is a unique and enriching experience that blends traditions, diversity, and a vibrant atmosphere.",
    details: [
      {
        title: "Explore the Neighborhoods",
        text: "Montreal is a mosaic of neighborhoods, each with its distinct personality. From the joie de vivre of Old Montreal to the urban art of Plateau Mont-Royal, newcomers can wander through cobblestoned streets steeped in history or enjoy eclectic districts filled with shops, cafes, and art galleries.",
      },
      {
        title: "Experience Cultural Diversity",
        text: "Cultural diversity is at the heart of Montreal. Newcomers get to savor a vast range of local and international cuisine, from traditional Quebecois delights to the exotic flavors found in the city's numerous ethnic restaurants. Festivals throughout the year celebrate gastronomy from around the world along with music and art.",
      },
      {
        title: "Learn Quebecois French",
        text: "Although French is the official language, Montreal is a city where linguistic diversity thrives. Newcomers can perfect their Quebecois French while benefiting from plenty of community support to adapt to daily life.",
      },
      {
        title: "TAKE PART IN LOCAL FESTIVITIES",
        text: "Montrealers love to celebrate, whether it's during summer music festivals, sports events, or neighborhood parties. Taking part in these festivities is an excellent way to immerse yourself in local culture and connect with the community.",
      },
      {
        title: "get to know the transport system",
        text: "Navigating through the city can be an adventure in itself. Newcomers can make use of the efficient metro system, numerous bike paths, and buses that crisscross Montreal. It’s a great way to explore the city conveniently and ecologically.",
      },
    ],
    conclusionText:
      "Montreal offers a unique experience for newcomers. With its cultural diversity, eclectic neighborhoods, and festive spirit, the city is ready to welcome everyone who wants to make Montreal their new home. This adventure is just beginning, and every street corner holds a new discovery for those daring to explore this exceptional city. Welcome to Montreal, where the unknown becomes an exciting adventure!",
  };
  return (
    <div className="container px-0 text-black2">
      <div className="relative w-full bg-[url(/assets/article-details-bg.webp)] bg-no-repeat lg:h-[656px] h-[389px] lg:bg-right-bottom lg:bg-[length:205%] bg-[length:2200px] bg-[73%_100%]">
        <div className="absolute lg:bottom-[75px] sm:bottom-[60px] bottom-[82px] max-w-[1538px] sm:w-10/12 w-full px-6 sm:px-0 left-1/2 -translate-x-1/2">
          <h2 className="lg:text-[80px] sm:text-[40px] text-[24px] lg:leading-[88px] sm:leading-[46px] leading-[26px] font-bold">
            {data.title}
            <span className="font-normal block">{data.subTitle}</span>
          </h2>
        </div>
      </div>
      <div className="lg:pt-[200px] pt-[100px] pb-[100px] max-w-[1538px] lg:w-10/12 w-full px-5 lg:px-0 mx-auto">
        <div className="flex justify-between items-center mb-[54px]">
          <button className="flex flex-row items-center gap-2.5 sm:text-[22px] text-[14px] sm:leading-[28px] leading-[18px] font-light">
            <ArrowLeftIcon height={24} width={24} />
            Back to Articles
          </button>
          <p className="sm:text-[22px] text-[14px] sm:leading-[28px] leading-[18px] font-light">{data.date}</p>
        </div>

        <div>
          <h3 className="sm:text-[22px] text-[14px] sm:leading-[28px] leading-[18px] font-semibold mb-[30px]">
            {data.shortDescription}
          </h3>
          {data.details?.map((item) => (
            <ArticleText key={item.title} title={item.title} text={item.text} />
          ))}

          <p className="sm:text-[22px] text-[14px] sm:leading-[28px] leading-[18px] font-semibold">
            {data.conclusionText}
          </p>
        </div>
      </div>
      <div className="container bg-primary py-20">
        <div className="max-w-[1538px] m:w-10/12 w-full sm:px-0 mx-auto">
          <AdvantageComponent />
        </div>
      </div>
    </div>
  );
}

export default Article;
