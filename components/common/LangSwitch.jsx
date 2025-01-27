import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

function LangSwitch({ onClick = () => {} }) {
  const router = useRouter();
  const path = usePathname();

  const [lang, setLang] = useState(
    path.includes("/en") || path.includes("/en/") ? "en" : "fr"
  );

  const [show, setShow] = useState(false);

  // const locales = ["en", "fr"];
  const lanSwitch = (lan) => {
    onClick();
    setShow(true);

    let finalUrl;

    if (lan === "fr" && path === "/en") {
      finalUrl = "/";
    }
    if (lan === "en" && path === "/") {
      finalUrl = "/en";
    }
    if (lan === "fr" && path.startsWith("/en/article/")) {
      finalUrl = path?.replace(/\/en\/article\//, "/article/");
    }
    if (lan === "en" && path.startsWith("/article/")) {
      finalUrl = path?.replace(/\/article\//, "/en/article/");
    }
    if (lan === "fr" && path === "/en/privacy-policy") {
      finalUrl = "/politique-de-confidentialite";
    }
    if (lan === "en" && path === "/politique-de-confidentialite") {
      finalUrl = "/en/privacy-policy";
    }

    if (lan === "fr" && path === "/en/cookie-policy") {
      finalUrl = "/politique-des-temoins";
    }
    if (lan === "en" && path === "/politique-des-temoins") {
      finalUrl = "/en/cookie-policy";
    }

    console.log(finalUrl)
    if (finalUrl) {
      setLang(lan);
      router.replace(finalUrl);
    }

    setTimeout(() => {
      setShow(false);
    }, 100);
  };

  return (
    <>
      {show ? (
        <div className="fixed h-full w-full top-0 z-10 bg-black-600 bg-opacity-75">
          <span className="loader transform-center"></span>
        </div>
      ) : null}

      {/* <span className="flex items-center justify-center xl:py-[27px] pt-[40px] pb-[60px] xl:pl-[30px]">
        {locales?.map((local, index) => (
          <Fragment key={local}>
            <button
              className={`text-primary navItem border-b border-transparent ${
                lang === local ? "!border-primary" : ""
              } hover:border-primary btn-animation`}
              onClick={() => lanSwitch(local)}
            >
              {local.toUpperCase()}
            </button>
            {index !== locales.length - 1 ? (
              <span className="mx-1">/</span>
            ) : null}
          </Fragment>
        ))}
      </span> */}
      <span className="flex justify-center text-xl gap-1">
        {lang === "en" ? (
          <button
            type="button"
            className="text-[#24211E]"
            onClick={() => lanSwitch("fr")}
          >
            FR
          </button>
        ) : (
          <button
            type="button"
            className="text-[#24211E]"
            onClick={() => lanSwitch("en")}
          >
            EN
          </button>
        )}
      </span>
    </>
  );
}

export default LangSwitch;
