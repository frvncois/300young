import OmniaLogo from "@/components/icons/OmniaLogo";

const AboutUs = () => {
  return (
    <div className="container px-0 bg-primary pt-20 pb-10 2xl:pt-[200px] 2xl:pb-[50px]" id="about-us">
      <div className="container text-black2 space-y-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4">
            <OmniaLogo className="min-w-[162px] lg:min-w-[250px] h-auto" />
          </div>
          <div className="col-span-8"></div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-12 lg:col-span-8 space-y-2 text-sm lg:text-[22px] leading-[150%]">
            <p>
              At Omnia, quality drives us forward. It is omnipresent in every
              project, every construction site. For us, expertise blends with
              the satisfaction of our collaborators, employees, clients, and
              partners. We believe in going beyond the requirements to create
              unique, innovative, and inviting spaces.
            </p>
            <p>
              From project management to real estate development, we exceed the
              expectations of our partners and clients every day, and have done
              so since 1985. Over the years, we have accumulated projects, built
              a cohesive team of seasoned professionals, diversified our skills,
              established trusting relationships, developed our expertise, and
              successfully completed prominent residential, industrial, and
              commercial projects across the country, totaling millions of
              square feet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
