import Image from "next/image";
import React from "react";

function TheProject() {
  return (
    <div className="container relative 2xl:min-h-[1001px]" id="the-project">
      {/* <div className=" bg-[url('/assets/the-project-bg.webp')] w-full h-full bg-right bg-contain bg-no-repeat"> */}
      {/* <div className=" bg-[url('/assets/the-project-cp-11.webp')] w-full h-full bg-right bg-contain bg-no-repeat"> */}
      <div className="absolute top-0 right-0 md:w-[70%] lg:w-[74%] -z-10">
        <Image
          src="/assets/the-project-bg.webp"
          width={500}
          height={500}
          alt="bg"
          className="w-full sm:block hidden"
        />
        <Image
          src="/assets/the-project-bg-m2.webp"
          width={500}
          height={500}
          alt="bg"
          className="w-fit sm:hidden"
        />
      </div>
      {/* <div className="bg-[url('/assets/the-project-cp.webp')] w-full h-full bg-right-bottom bg-[length:74%] bg-no-repeat"> */}
      <div className="sm:pt-[130px] pt-[98px] px-4 sm:pr-0 2xl:max-w-[1100px] max-w-[800px]">
        <div className="lg:pb-[80px] mb-[33px]">
          <h1 className="sm:text-[66px] text-[30px] font-bold sm:leading-[84.78px] leading-[45px] sm:mb-6 mb-3 uppercase">
            The project
          </h1>
          <p className="sm:text-[20px] text-[14px] sm:leading-[30px] leading-[21px] font-normal">
            300 Young is a human-scale project designed to offer a unique and
            welcoming rental experience. With only 67 units, 300 Young stands
            out for its intimate and warm atmosphere, creating a true community
            at the heart of its neighborhood. It&apos;s a place where history
            meets modernity, where conviviality thrives on a sunny terrace, and
            where each unit contributes to a home full of charm and character.
            Welcome to 300 Young, where living takes on a new dimension,
            tailored to each individual.
          </p>
        </div>
      </div>
      {/* </div> */}
      <div className="absolute lg:w-[74%] w-full right-0 bottom-0 -z-10">
        <Image
          src="/assets/the-project-cp.webp"
          width={500}
          height={500}
          alt="bg"
          className="w-full sm:block hidden"
        />
        <Image
          src="/assets/the-project-bg-bottom-m.webp"
          width={500}
          height={500}
          alt="bg"
          className="w-full sm:hidden"
        />
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default TheProject;
