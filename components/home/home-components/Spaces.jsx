import React from "react";
import { EffectFade, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { useAtom } from "jotai";
import { spacesData } from "@/jotai/jotaiManager";  // Import the new atom

function Spaces() {
  const [spacesDataContent] = useAtom(spacesData);  // Use the new atom here

  return (
    <div className="container px-0" id="spaces">
      <Swiper
        loop
        spaceBetween={30}
        effect={"fade"}
        keyboard={true}
        modules={[EffectFade, Navigation, Keyboard]}
        className="spaces-swiper"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {spacesDataContent?.map((item) => (
          <SwiperSlide key={item.id}>
          <div className="relative h-[50vh] sm:h-screen lg:max-h-[1143px] w-full bg-cover bg-no-repeat bg-center">
              <Image
                src={item.image}
                alt={item.title}
                height={500}
                width={500}
                className="w-full h-full object-cover object-left-top"
              />
              <div
                className={`hidden md:block absolute bottom-0 lg:right-[120px] lg:w-4/12 w-11/12 left-1/4 -translate-x-1/2 max-w-[1367px] 2xl:px-[130px] lg:pt-[115px] sm:pt-[150px] pt-[80px] 2xl:pb-[90px] pb-[50px] opacity-85 ${item.shape}`}
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="relative">
                  <div className="sm:px-[60px] px-5">
                    <h2 className="sm:text-[30x] sm:leading-[40px] text-[30px] leading-[38px] font-bold uppercase lg:mb-[30px] mb-5">
                      {item.title}
                    </h2>
                    <p className="sm:text-[16px] sm:leading-[25px] text-[12px] leading-[18px] font-normal">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex justify-between absolute lg:bottom-2 -bottom-6 w-full">
                    {item.id !== 1 && (
                      <div className="swiper-button-prev !h-auto unit-swiper-btn !text-black2">
                        <ArrowLeftIcon className="h-6 w-6" />
                      </div>
                    )}
                    {item.id !== 5 && (
                      <div className="swiper-button-next !h-auto unit-swiper-btn !text-black2">
                        <ArrowRightIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Spaces;
