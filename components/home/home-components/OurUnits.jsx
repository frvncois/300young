import React, { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { unitsData } from "@/data/ourUnits";
import UnitItemDetails from "./UnitItemDetails";
import { isEmpty } from "@/utils/helper";
import gsap from "gsap";
import Link from "next/link";
// import img1 from ''

const UnitItem = ({ data }) => {
  return (
    <div className="text-start flex-1 ">
      <div className={`p-5 ${data.color} ${data.shape}`}>
        <div className="flex justify-between items-center pt-20">
          <p className="text-[40px] leading-10 font-semibold">{data.title}</p>
          <ArrowUpRightIcon className="h-5 w-5" />
        </div>
        <p className="text-[14px] leading-[14px] font-normal">
          {data.size}
          {data.sizeSquare ? <sup>2</sup> : ""}
        </p>
        <p className="text-[14px] leading-[14px] font-normal">
          $ {data.startingForm}
        </p>
        <button>Télécharger le plan</button>
      </div>
    </div>
  );
};

function OurUnits() {
  const [showItem, setShowItem] = useState({});

  useEffect(() => {
    if (!isEmpty(showItem)) {
      gsap.fromTo(
        ".unit-container",
        { x: 0, opacity: 0 },
        { x: 0, opacity: 1 }
      );
    } else {
      gsap.fromTo(
        ".unit-list-container",
        { x: 0, opacity: 0.25 },
        { x: 0, opacity: 1 }
      );
    }
  }, [showItem]);

  const onCloseDetailsView = () => {
    gsap.fromTo(
      ".unit-container",
      { x: 0, opacity: 1 },
      { x: 0, opacity: 0, onComplete: () => setShowItem({}) }
    );
  };

  return (
    <div className="xl:pt-[200px] pt-[100px] pb-[100px]" id="our-units">
      <div className="container">
        <h2 className="xl:text-[66px] text-[30px] xl:landing-[84px] leading-[45px] font-bold uppercase">
          Our Units
        </h2>

        {isEmpty(showItem) ? (
          <div className="unit-list-container xl:pt-[180px] pt-[30px] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {unitsData?.map((unit) => (
              <div key={unit.id} className="flex items-end">
                <UnitItem data={unit} onClick={() => setShowItem(unit)} />
              </div>
            ))}
          </div>
        ) : (
          <UnitItemDetails
            data={showItem}
            closeDetailsVew={onCloseDetailsView}
          />
        )}

        <div className="grid grid-cols-12 gap-5 xl:mt-12 mt-8">
          <div className="md:col-span-6 xl:col-span-9"></div>
          <Link
            href="/#contact-us"
            // onClick={handleShowAll}
            className="flex justify-center text-[20px] leading-5 font-normal  col-span-12 md:col-span-6 xl:col-span-3 py-2 bg-black2 hover:bg-[#E0A94F] text-xl uppercase text-white hover:text-black2"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurUnits;
