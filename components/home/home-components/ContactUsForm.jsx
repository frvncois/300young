import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Form, Formik } from "formik";
import gsap from "gsap";
import { useState } from "react";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter a last name without accents"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter a first name without accents"),
  email: Yup.string().email("Error").required("Required"),
  phone: Yup.string().min(12, "Please enter an 11-digit number."),
  message: Yup.string(),
});

const ContactUsForm = ({ setIsSuccess }) => {
  const [isCommunicate, setIsCommunicate] = useState(false);
  const [unitList, setUnitList] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [size, setSize] = useState(null);

  const handleCommunicate = () => {
    setIsCommunicate(!isCommunicate);
  };

  const handleUnitList = (value) => {
    if (unitList.includes(value)) {
      setUnitList((prevList) => prevList.filter((item) => item !== value));
    } else {
      setUnitList((prevList) => [...prevList, value]);
    }
  };

  const onSubmit = (values) => {
    console.log(values);
    setIsSuccess(true);
  };

  function handleDropdown() {
    if (!openDropdown) {
      const menuElement = document.querySelector(".menu");
      // Get the actual height of the menu
      const menuHeight = menuElement.scrollHeight;
      
      gsap.fromTo(".caret", { rotation: 0 }, { rotation: -180 });
      gsap.set(".menu", { opacity: 1 });
      gsap.fromTo(".menu", 
        { height: 0 }, 
        { height: menuHeight }
      );
      setOpenDropdown(true);
    } else {
      const menuElement = document.querySelector(".menu");
      const menuHeight = menuElement.scrollHeight;
      
      gsap.fromTo(".caret", { rotation: -180 }, { rotation: 0 });
      gsap.fromTo(
        ".menu",
        { height: menuHeight },
        { height: 0, onComplete: () => gsap.set(".menu", { opacity: 0 }) }
      );
      setOpenDropdown(false);
    }
  }

  return (
    <Formik
      className="w-full"
      initialValues={{
        name: "",
        firstName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="w-full">
          <label htmlFor="name" className="block text-sm text-[#8C682F]">
            Last Name
          </label>
          <div className="mt-2">
            <Field
              className="w-full p-3 bg-[#F2F2F2E5] border order-[#BDBDBD] text-[#6C6042] placeholder:text-[#6C6042] rounded-lg"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Last name"
            />
          </div>
          {errors.name && touched.name ? (
            <span className="mt-2 text-[#EF4A3C] text-[13px] leading-[16px]">
              {errors.name}
            </span>
          ) : null}

          <label
            htmlFor="firstName"
            className="block mt-3 text-sm text-[#8C682F]"
          >
            First Name
          </label>
          <div className="mt-2">
            <Field
                 className="w-full p-3 bg-[#F2F2F2E5] border order-[#BDBDBD] text-[#6C6042] placeholder:text-[#6C6042] rounded-lg"
              name="firstName"
              type="text"
              autoComplete="firstName"
              placeholder="First name"
            />
          </div>
          {errors.firstName && touched.firstName ? (
            <span className="mt-2 text-[#EF4A3C] text-[13px] leading-[16px]">
              {errors.firstName}
            </span>
          ) : null}

          <label htmlFor="email" className="block mt-3 text-sm text-[#8C682F]">
            Email
          </label>
          <div className="mt-2">
            <Field
              className="w-full p-3 bg-[#F2F2F2E5] border order-[#BDBDBD] text-[#6C6042] placeholder:text-[#6C6042] rounded-lg"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="@gmail.com"
            />
          </div>
          {errors.email && touched.email ? (
            <span className="mt-2 text-[#EF4A3C] text-[13px] leading-[16px]">
              {errors.email}
            </span>
          ) : null}

          <label htmlFor="phone" className="block mt-3 text-sm text-[#8C682F]">
            Phone
          </label>
          <div className="mt-2">
            <Field
              className="w-full p-3 bg-[#F2F2F2E5] border order-[#BDBDBD] text-[#6C6042] placeholder:text-[#6C6042] rounded-lg"
              name="phone"
              type="text"
              autoComplete="phone"
              placeholder="+1 (514)"
            />
          </div>
          {errors.phone && touched.phone ? (
            <span className="mt-2 text-[#EF4A3C] text-[13px] leading-[16px]">
              {errors.phone}
            </span>
          ) : null}

          <label
            htmlFor="firstName"
            className="block mt-3 text-sm text-[#8C682F]"
          >
            Superficie recherchée
          </label>
          <div
            className="w-full justify-between flex p-3 bg-[#F2F2F2E5] border order-[#BDBDBD] text-[#6C6042] placeholder:text-[#6C6042] rounded-lg"
            onClick={() => handleDropdown()}
          >
            {!size ? "Studio" : size}
            <span>
              <ChevronDownIcon className="caret w-5 max-h-5" />
            </span>
          </div>

          <div className="relative w-full">
            <ul className="menu absolute opacity-0 left-0 top-0 z-40 w-full h-0 overflow-hidden text-[#6C6042] bg-white rounded-lg border border-[#E8E1CF]">
            <li
                className={cn(
                  "p-3 hover:text-white hover:bg-[#6C6042] border-b border-b-[#6C6042] cursor-pointer",
                  size === "Studio" && "text-white bg-[#6C6042]"
                )}
                onClick={() => setSize("Studio")}
              >
                Studio
              </li>
              <li
                className={cn(
                  "p-3 hover:text-white hover:bg-[#6C6042] border-b border-b-[#6C6042] cursor-pointer",
                  size === "3 1/2" && "text-white bg-[#6C6042]"
                )}
                onClick={() => setSize("3 1/2")}
              >
                3 ½
              </li>
              <li
                className={cn(
                  "p-3 hover:text-white hover:bg-[#6C6042] border-b border-b-[#6C6042] cursor-pointer",
                  size === "4 1/2" && "text-white bg-[#6C6042]"
                )}
                onClick={() => setSize("4 1/2")}
              >
                4 ½
              </li>
              <li
      className={cn(
        "p-3 hover:text-white hover:bg-[#6C6042] border-b border-b-[#6C6042] cursor-pointer",
        size === "5 1/2" && "text-white bg-[#6C6042]" // Corrected condition
      )}
      onClick={() => setSize("5 1/2")} // Corrected value
    >
      5 ½
    </li>
            </ul>
          </div>

          {!size && isSubmitted && (
            <span className="mt-2 text-[#EF4A3C] text-[13px] leading-[16px]">
              Please select a desired size.
            </span>
          )}


          <label
            htmlFor="communication"
            className="block mt-3 text-sm text-[#8C682F]"
          >
            Consentement
          </label>
          <div className="mt-2 flex items-start gap-2 text-[#24211E]">
            <div
              className="w-4 h-4 border border-[#24211E] flex justify-center items-center cursor-pointer"
              onClick={handleCommunicate}
            >
              <span>
                <CheckIcon
                  className={cn("w-3.5 h-3.5", { "opacity-0": !isCommunicate })}
                />
              </span>
            </div>
            <p className="-mt-0.5">
              By checking this box, I agree to receive communications from
              <b> 300 YOUNG</b> and <b>Omnia.</b> <br />
              In accrodance with our{" "}
              <span className="underline cursor-pointer">Privacy Policy.</span>
            </p>
          </div>
          {!isCommunicate && isSubmitted && (
            <span className="mt-2 text-[#EF4A3C] text-[13px] leading-[16px]">
              Please accept the T&Cs.
            </span>
          )}
          <div className="pt-8 ">
          <button
            type="submit"
            onClick={() => setIsSubmitted(true)}
            className="mt-1 w-full py-2 bg-[#24211E] hover:bg-[#E0A94F] text-base lg:text-xl uppercase text-white hover:text-[#24211E] border border-[#24211E]"
          >
            Sign me up
          </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
