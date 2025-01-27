import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="container px-0 relative">
      <Image
        className="absolute -z-30 w-full h-dvh top-0 left-0 object-cover object-center"
        src="/assets/hero-image.png"
        width="1920"
        height="1080"
        alt="300 Young"
      />

      <Image
        className="hidden md:block absolute bottom-0 right-0 md:w-[70%] lg:w-[74%] h-auto -z-10 opacity-100"
        src="/assets/hero-bottom-lg-shape.png"
        alt="300 Young"
        width="1680"
        height="961"
      />
      <Image
        className="hidden md:block absolute top-0 right-[12.5%] md:w-[37.5%] h-auto -z-10 opacity-80"
        src="/assets/hero-top-lg-shape.png"
        alt="300 Young"
        width="720"
        height="480"
      />
      <Image
        className="hidden md:block xl:hidden 2xl:block absolute bottom-[12.5%] left-0 md:w-[12.5%] h-auto -z-10 opacity-35"
        src="/assets/hero-left-lg-shape.png"
        alt="300 Young"
        width="240"
        height="480"
      />

      <Image
        className="md:hidden absolute bottom-0 left-0 w-[25%] h-auto -z-10 opacity-[20%]"
        src="/assets/herp-left-sm-shape.png"
        alt="300 Young"
        width="98"
        height="440"
      />
      <Image
        className="md:hidden absolute bottom-[66px] right-0 w-[37%] h-auto -z-10 opacity-[20%]"
        src="/assets/herp-right-sm-shape.png"
        alt="300 Young"
        width="145"
        height="342"
      />
      <div className="md:hidden absolute -z-10 top-[70px] right-0 h-[97px] w-12 rounded-l-full border border-black2 opacity-10"></div>
      <div className="container p-4 md:px-40 2xl:pl-64 pt-[30dvh] md:pt-0 w-full min-h-dvh md:flex flex-col justify-center gap-4">
        <h1 className="text-[34px] lg:text-[90px] leading-[120%] font-bold uppercase">
          Come and live in Montreal’s trendiest neighborhood
        </h1>
        <Link
          href="/#contact-us"
          className="hidden md:flex justify-center w-full max-w-[400px] py-2 bg-[#E0A94F] hover:bg-black2 text-xl uppercase text-[#24211E] hover:text-white cursor-pointer"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
