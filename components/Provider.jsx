"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Navbar from "./nav/Navbar";
import { useAtom } from "jotai";
import { checkMobile, translate } from "@/jotai/jotaiManager";
import en from "../app/dictionaries/en.json";
import fr from "../app/dictionaries/fr.json";
import { isMobile } from "react-device-detect";
import BottomBar from "./nav/BottomBar";
import Footer from "./footer/Footer";

function Provider({ children }) {
  const [, setTranslate] = useAtom(translate);
  const [, setIsMobile] = useAtom(checkMobile);
  const pathname = usePathname();
  const router = useRouter();

  if (pathname.split("/")[1] === "fr") {
    const data = pathname.split("/");
    data.splice(1, 1);
    const finalUrl = data.join("/");
    if (finalUrl) {
      router.push(finalUrl);
    } else {
      router.push("/");
    }
  }

  useEffect(() => {
    if (pathname.includes("/en") || pathname.includes("/en/")) {
      setTranslate(en);
    } else {
      setTranslate(fr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    setIsMobile(isMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <BottomBar />
      {children}
      <Footer />
    </>
  );
}

export default Provider;
