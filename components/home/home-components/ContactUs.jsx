import React, { useState } from "react";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div id="contact-us" className="w-full py-10 pt-20 2xl:pt-[200px] 2xl:pb-[100px]">
      <div className="container text-[#24211E]">
        <h2 className="font-bold text-[30px] lg:text-[66px] uppercase">
          Contact Form 
        </h2>
        <p className="w-5/6 text-sm lg:text-[22px] leading-[100%]">
          Fill out the form below to receive information about the start date of
          our unit reservations and the completion of our new building.
        </p>

        <div className="grid grid-cols-6">
          <div className="md:col-span-1 lg:col-span-2"></div>

          <div className="mt-7 col-span-6 lg:col-span-3">
            {!isSuccess && <ContactUsForm setIsSuccess={setIsSuccess} />}
            {isSuccess && (
              <div className="py-20 font-semibold text-[22px]">
                <p>Thanks,</p>
                <p>
                  We have received your message, you will receive a confirmation
                  message shortly.
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
