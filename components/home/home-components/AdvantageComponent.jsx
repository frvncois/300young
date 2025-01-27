import React from "react";
import FriendlyIcon from "@/public/icons/FriendlyIcon";
import LaundryIcon from "@/public/icons/LaundryIcon";
import MobilityIcon from "@/public/icons/MobilityIcon";
import NearbyIcon from "@/public/icons/NearbyIcon";
import SimplifiedIcon from "@/public/icons/SimplifiedIcon";

const advantageList = [
  {
    icon: <NearbyIcon />,
    title: "Nearby parks",
  },
  {
    icon: <FriendlyIcon />,
    title: "A friendly atmosphere",
  },
  {
    icon: <SimplifiedIcon />,
    title: "Simplified housing",
  },
  {
    icon: <MobilityIcon />,
    title: "Respectful mobility",
  },
  {
    icon: <LaundryIcon />,
    title: "Laundry AREA",
  },
];
function AdvantageComponent() {
  return (
    <div className="text-black2 space-y-10">
      <h2 className="font-bold text-xl md:text-[30px] lg:text-4xl uppercase">300 Young’s advantages</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-5 text-lg text-center">
        <div className=""></div>
        {advantageList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-start items-center gap-4"
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdvantageComponent;
