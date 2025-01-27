import DollarIcon from "@/components/icons/DollarIcon";
import FurnishedIcon from "@/components/icons/FurnishedIcon";
import IconCommonSpace from "@/components/icons/IconCommonSpace";
import RoomIcon from "@/components/icons/RoomIcon";
import ShowerIcon from "@/components/icons/ShowerIcon";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useAtom } from "jotai";
import { checkMobile } from "@/jotai/jotaiManager";

function UnitItemDetails({data, closeDetailsVew }) {
  const [isMobile] = useAtom(checkMobile);
  // const data = {
  //   id: 1,
  //   shape: "unit-1",
  //   color: "unit-1-bg",
  //   title: "Studio",
  //   size: "Approximately 367 sq ft",
  //   startingForm: "Starting from $XXX",
  //   bannerImage: "/assets/unit-1.webp",
  //   detailsInfo: {
  //     images: ["/assets/unit-detail-1.webp", "/assets/unit-detail-2.webp"],
  //     size: "Approximately 914 sq ft",
  //     details:
  //       "Charming studio for rent, ideal for one person, offering an elegant and functional space perfect for creating a cozy, intimate home.",
  //     featureColor: "#354655",
  //     features: [
  //       { icon: "price", text: "Starting from $XXX" },
  //       { icon: "room", text: "X rooms" },
  //       { icon: "commonSpace", text: "Shared common spaces" },
  //       { icon: "independentBathroom", text: "Independent bathroom" },
  //       { icon: "furnished", text: "Furnished" },
  //     ],
  //   },
  // };

  const getIcon = (icon) => {
    let Icon;
    switch (icon) {
      case "price":
        Icon = <DollarIcon />;
        break;
      case "room":
        Icon = <RoomIcon />;
        break;
      case "commonSpace":
        Icon = <IconCommonSpace />;
        break;
      case "independentBathroom":
        Icon = <ShowerIcon />;
        break;
      case "furnished":
        Icon = <FurnishedIcon />;
        break;
      default:
        Icon = "";
        break;
    }
    return Icon;
  };

  // console.log(isMobile)
  return (
    <div className="mt-4 opacity-0 unit-container">
      <button
        onClick={closeDetailsVew}
        className="flex flex-row items-center gap-4 text-[14px] leading-none font-semibold text-black2"
      >
        <ArrowLeftIcon height={24} width={24} />
        Back to Units
      </button>
      <div className={`mt-4 ${!isMobile ? data.shape : ""}`}>
        <div className="xl:grid grid-cols-4 flex flex-col-reverse">
          <div
            className={`col-span-1 xl:pt-[200px] pt-3.5 xl:pb-[50px] pb-[27px] xl:px-[74px] px-5 flex flex-col justify-between ${data.color}`}
          >
            <div>
              <div className="flex flex-row xl:flex-col justify-between items-center xl:items-start">
                <h2 className="xl:text-[44px] text-[24px] leading-none font-semibold mb-0.5">
                  {data?.title}
                </h2>
                <p className="xl:text-[17px] text-[12px] leading-none font-semibold xl:mb-2.5 sm:mb-0 mb-2">
                  {data?.detailsInfo?.size}
                </p>
              </div>
              <div className="sm:grid sm:grid-cols-2 xl:grid-cols-1 gap-6 mt-0 sm:mt-[22px] xl:mt-0">
                <p className="text-[14px] leading-[18px] font-normal">
                  {data?.detailsInfo?.details}
                </p>
                <div className="xl:mt-[22px] sm:mt-0 mt-4">
                  <ul style={{ color: data.detailsInfo.featureColor }}>
                    {data?.detailsInfo.features?.map((feature) => {
                      const { icon, text } = feature;
                      return (
                        <li
                          key={feature.text}
                          className="flex flex-row gap-0.5 items-center xl:mb-2.5 mb-1.5"
                        >
                          {getIcon(icon)}
                          <p className="text-[14px] leading-none font-normal">
                            {text}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-between relative mt-10 sm:mt-6 xl:mt-auto">
              <div className="swiper-button-prev h-auto unit-swiper-btn !text-black2">
                <ArrowLeftIcon className="h-6 w-6" />
              </div>
              <div className="swiper-button-next h-auto unit-swiper-btn !text-black2">
                <ArrowRightIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className={`${isMobile ? data.shape : ""} col-span-3`}>
            <Swiper
              lazy="true"
              slidesPerView={1}
              spaceBetween={0}
              effect={"fade"}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              keyboard={true}
              modules={[EffectFade,Navigation, Keyboard]}
              className="podcasts-slider"
              onChange={(e) => console.log(e)}
            >
              {data?.detailsInfo?.images?.map((item) => (
                <SwiperSlide key={item}>
                  <Image
                    src={item}
                    height={500}
                    width={500}
                    alt={data?.title}
                    className="w-full 2xl:max-h-[775px] lg:max-h-[700px] lg:h-auto h-[358px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnitItemDetails;
