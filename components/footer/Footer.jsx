import OmniaLogo from "@/components/icons/OmniaLogo";
import YoungLogo from "@/components/icons/YoungLogo";
import Image from "next/image";
import ScrollUpButton from "./ScrollUpButton";
import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";

import { useAtom } from "jotai";
import {
  locationLifeStyleInData,
  locationLifeStyleInitialData,
} from "@/jotai/jotaiManager";

const Footer = () => {
  const footerMenus = [
    { name: "The Projects", link: "/#the-project" },
    { name: "The Units", link: "/#our-units" },
    { name: "Aminities", link: "/#aminities" },
    { name: "Location", link: "/#location-life-style" },
    { name: "Lifestyle", link: "/#location-life-style" },
    { name: "Contact", link: "/#contact-us" },
    { name: "Privacy policy", link: "/privacy-policiy" },
  ];

  const [, setLocationLifeStyleData] = useAtom(locationLifeStyleInData);

  const handleMenuButtonClick = (name) => {
    if (name === "Location") {
      setLocationLifeStyleData([...locationLifeStyleInitialData]);
    } else if (name === "Lifestyle") {
      const reverserArray = [...locationLifeStyleInitialData].reverse();
      setLocationLifeStyleData(reverserArray);
    }
  };

  return (
    <>
      <Image
        className="hidden md:block w-full h-[129px] xl:h-[181px] 2xl:h-[241px] object-contain object-center"
        src="/assets/footer-top.png"
        alt="footer top"
        height="241"
        width="1920"
      />
      <Image
        className="-mb-0.5 md:hidden w-full h-autoo bject-cover object-center"
        src="/assets/footer-mobile-top.png"
        alt="footer top"
        height="224"
        width="390"
      />
      <div className="relative container px-0 w-full flex items-end bg-[url(/assets/footer-right.png)] bg-contain bg-right bg-no-repeat">
        <div className="bg-[#24211E] px-6 lg:px-6 2xl:pl-[120px] pt-4 pb-[148px] md:py-[120px] w-full lg:w-3/4 lg:rounded-br-[100px] footer-clippath text-white">
          <div className="hidden w-full md:grid grid-cols-3 md:grid-cols-4 gap-10 mb-10 items-end">
            <div>
              <YoungLogo className="max-w-[84px] md:max-w-[177px] w-full h-auto" />
            </div>
            <div></div>
            <div>
              <OmniaLogo className="max-w-[84px] md:max-w-[177px] w-full h-auto" />
            </div>
          </div>
          
          <div className="hidden w-full md:grid grid-cols-3 md:grid-cols-4 gap-10 text-sm md:text-base">
          <div className="flex flex-col gap-10 justify-between">
              <div className="flex flex-col gap-1 justify-center items-start">
              <p className="pb-4">Tel. +(438)-256-7005</p>
              <p className="pb-4">300 Rue Young<br/>
              Montréal, QC H3C 2G2</p>
              <p className="pb-4">Courriel</p>
              </div>
              <div className="flex">
              <FacebookIcon/> <InstagramIcon/>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1 justify-center items-start">
                {footerMenus.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.link}
                      onClick={() => handleMenuButtonClick(item.name)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link href="/#about-us" className="flex flex-col gap-10">
              <p>About Us</p>
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden w-full grid grid-cols-3">
            <div>
              <YoungLogo className="max-w-[84px] w-full h-auto" />
            </div>
          </div>
          <div className="md:hidden mt-5 w-full flex gap-20 text-sm">
            <div>
              <div className="flex flex-col gap-[10px] justify-center items-start">
                {footerMenus.map((item, index) => {
                  return (
                    index < 4 && (
                      <>
                        <Link
                          key={index}
                          href={item.link}
                          onClick={() => handleMenuButtonClick(item.name)}
                        >
                          {item.name}
                        </Link>
                      </>
                    )
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-[10px] justify-center items-start">
                {footerMenus.map((item, index) => {
                  return (
                    index > 3 && (
                      <>
                        <Link
                          key={index}
                          href={item.link}
                          onClick={() => handleMenuButtonClick(item.name)}
                        >
                          {item.name}
                        </Link>
                      </>
                    )
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:hidden mt-10 w-full grid grid-cols-3">
            <div>
              <OmniaLogo className="max-w-[84px] w-full h-auto" />
            </div>
          </div>
          <div className="md:hidden mt-5 space-y-10 text-sm">
            <Link href="/#about-us">About us</Link>
            <p>Privacy Policy</p>
          </div>
        </div>

        <ScrollUpButton />
      </div>
    </>
  );
};

export default Footer;
