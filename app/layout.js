import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/components/Provider";

const hurmeGeometricSens2 = localFont({
  src: [
    {
      path: "../public/fonts/HurmeGeometricSans2-Light.woff",
      weight: "300",
    },
    {
      path: "../public/fonts/HurmeGeometricSans2-Regular.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/HurmeGeometricSans2-Bold.woff",
      weight: "600",
    },
    {
      path: "../public/fonts/HurmeGeometricSans2-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-hurme-geometric-sens-2",
});

export const metadata = {
  title: "300 Young",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children, params }) {
  return (
    <html
      lang={params.lang}
      className={`${hurmeGeometricSens2.variable} font-hurmeGeometricSens2 scroll-smooth bg-[#f4f4f3] sm:bg-white`}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
