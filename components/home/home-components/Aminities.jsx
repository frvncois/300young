import BalconyIcon from "@/public/icons/BalconyIcon";
import BasketIcon from "@/public/icons/BasketIcon";
import BicycleIcon from "@/public/icons/BicycleIcon";
import ChairIcon from "@/public/icons/ChairIcon";
import CommuteIcon from "@/public/icons/CommuteIcon";
import FireplaceIcon from "@/public/icons/FireplaceIcon";
import TreeIcon from "@/public/icons/TreeIcon";
import WalkIcon from "@/public/icons/WalkIcon";
import WifiIcon from "@/components/icons/WifiIcon";
import PackageIcon from "@/components/icons/PackageIcon";
import WashingIcon from "@/components/icons/WashingIcon";
import CoworkingIcon from "@/components/icons/CoworkingIcon";
import ElectricIcon from "@/components/icons/ElectricIcon";
import InternetIcon from "@/components/icons/InternetIcon";
import Ets from "@/public/assets/ets.png";
import Image from "next/image"; 

import Link from "next/link";

const aminitiesAdvantagesList = [
  {
    icon: <BicycleIcon className="w-5 md:w-[35px] h-auto" />,
    title: "68 bicycle parking spaces",
  },
  {
    icon: <ChairIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Semi-furnished units",
  },
  {
    icon: <FireplaceIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Ground floor common room",
  },
  {
    icon: <WifiIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Wifi haute-vitesse",
  },
  {
    icon: <PackageIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Casiers intelligents",
  },
  {
    icon: <BalconyIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Majority of units with balcony",
  },
  {
    icon: <WashingIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Laundry area",
  },
  {
    icon: <CoworkingIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Espaces de coworking",
  },
  {
    icon: <ElectricIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Électricité incluse",
  },
  {
    icon: <InternetIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Internet optionnel",
  },
];

const nearbyList = [
  {
    icon: <WalkIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Lachine Canal",
  },
  {
    icon: <CommuteIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Public transportation",
  },
  {
    icon: <Image src={Ets} alt="ETS" className="w-5 md:w-[35px] h-auto" />,
    title: "ÉTS (École de Technologie Supérieure)",
  },
  {
    icon: <BasketIcon className="w-5 md:w-[35px] h-auto" />,
    title: "A variety of services, leisure activities, and restaurants",
  },
  {
    icon: <TreeIcon className="w-5 md:w-[35px] h-auto" />,
    title: "Parks and green spaces",
  },
];

const Aminities = () => {
  return (
    <div
      id="aminities"
      className="container px-0 bg-primary py-20 2xl:pt-[200px] 2xl:pb-[100px]"
    >
      <div className="container text-black2 space-y-10">
        <h2 className="font-bold text-[30px] lg:text-[66px] uppercase">
          Amenities
        </h2>
        <div className="grid grid-cols-12">
          <div className="xl:col-span-4"></div>
          <div className="col-span-12 xl:col-span-8">
            <h2 className="w-full font-semibold text-lg lg:text-2xl leading-9 uppercase border-b-2 border-[#24211E]">
              Our Advantages
            </h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 text-sm lg:text-[16px] leading-[100%] gap-y-3">
              <div className="space-y-3 md:space-y-5">
                {aminitiesAdvantagesList.map((item, index) => {
                  if (index < 5) {
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    );
                  }
                  return null; // Prevents React from rendering undefined
                })}
              </div>
              <div className="space-y-3 md:space-y-5">
                {aminitiesAdvantagesList.map((item, index) => {
                  if (index > 4) {
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    );
                  }
                  return null; // Prevents React from rendering undefined
                })}
              </div>
            </div>

            <h2 className="mt-12 w-full font-semibold text-lg lg:text-2xl leading-9 uppercase border-b-2 border-[#24211E]">
              Nearby
            </h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 text-sm lg:text-[16px] leading-[100%] gap-y-3">
              <div className="space-y-3 md:space-y-5">
                {nearbyList.map((item, index) => {
                  if (index < 3) {
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    );
                  }
                  return null; // Prevents React from rendering undefined
                })}
              </div>
              <div className="space-y-3 md:space-y-5">
                {nearbyList.map((item, index) => {
                  if (index > 2) {
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                    );
                  }
                  return null; // Prevents React from rendering undefined
                })}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
              <div></div>
              <Link
                href="/#contact-us"
                className="py-2 flex justify-center bg-[#24211E] hover:bg-[#E0A94F] text-base lg:text-xl uppercase text-white hover:text-[#24211E] border border-[#24211E]"
              >
                I’m interested
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aminities;
