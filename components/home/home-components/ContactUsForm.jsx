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
  const [budget, setBudget] = useState(null);

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
      gsap.fromTo(".caret", { rotation: 0 }, { rotation: -180 });
      gsap.set(".menu", { opacity: 1 });
      gsap.fromTo(".menu", { height: 0 }, { height: 145 });
      setOpenDropdown(true);
    } else {
      gsap.fromTo(".caret", { rotation: -180 }, { rotation: 0 });
      gsap.fromTo(
        ".menu",
        { height: 145 },
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
            * Last Name
          </label>
          <div className="mt-2">
            <Field
              className="w-full p-3 bg-[#E8E1CF] text-[#6C6042] placeholder:text-[#6C6042] rounded-bl-lg rounded-tr-lg"
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
            * First Name
          </label>
          <div className="mt-2">
            <Field
              className="w-full p-3 bg-[#E8E1CF] text-[#6C6042] placeholder:text-[#6C6042] rounded-bl-lg rounded-tr-lg border border-[#E8E1CF] border-opacity-50"
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
            * Email
          </label>
          <div className="mt-2">
            <Field
              className="w-full p-3 bg-[#E8E1CF] text-[#6C6042] placeholder:text-[#6C6042] rounded-bl-lg rounded-tr-lg border border-[#E8E1CF] border-opacity-50"
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
              className="w-full p-3 bg-transparent text-[#6C6042] placeholder:text-[#6C6042] rounded-bl-lg rounded-tr-lg border border-[#E8E1CF]"
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
            * Budget
          </label>
          <div
            className="mt-2 relative flex justify-between cursor-pointer w-full p-3 bg-[#E8E1CF] text-[#6C6042] rounded-bl-lg rounded-tr-lg border border-[#E8E1CF]"
            onClick={() => handleDropdown()}
          >
            {!budget ? "0000$ - 0000$" : budget}
            <span>
              <ChevronDownIcon className="caret w-5 max-h-5" />
            </span>
          </div>

          <div className="relative w-full">
            <ul className="menu absolute opacity-0 left-0 top-0 z-40 w-full h-0 overflow-hidden text-[#6C6042] bg-white rounded-lg border border-[#E8E1CF]">
              <li
                className={cn(
                  "p-3 hover:text-white hover:bg-[#6C6042] border-b border-b-[#6C6042] cursor-pointer",
                  budget === "1000$ - 2000$" && "text-white bg-[#6C6042]"
                )}
                onClick={() => setBudget("1000$ - 2000$")}
              >
                1000$ - 2000$
              </li>
              <li
                className={cn(
                  "p-3 hover:text-white hover:bg-[#6C6042] border-b border-b-[#6C6042] cursor-pointer",
                  budget === "3000$ - 4000$" && "text-white bg-[#6C6042]"
                )}
                onClick={() => setBudget("3000$ - 4000$")}
              >
                3000$ - 4000$
              </li>
              <li
                className={cn(
                  "p-3 hover:text-white hover:bg-[#6C6042] cursor-pointer",
                  budget === "4000$ - 5000$" && "text-white bg-[#6C6042]"
                )}
                onClick={() => setBudget("4000$ - 5000$")}
              >
                4000$ - 5000$
              </li>
            </ul>
          </div>

          {!budget && isSubmitted && (
            <span className="mt-2 text-[#EF4A3C] text-[13px] leading-[16px]">
              Please select a desired budget.
            </span>
          )}

          <label htmlFor="unit" className="block mt-3 text-sm text-[#8C682F]">
            * Desired Unit
          </label>
          <div className="mt-2 space-x-1 flex items-center text-[#24211E]">
            <div
              className="p-3 flex items-center gap-3 cursor-pointer"
              onClick={() => handleUnitList("Studio")}
            >
              <div className="w-4 h-4 border border-[#24211E] flex justify-normal items-center">
                {unitList.includes("Studio") && (
                  <CheckIcon className="w-3.5 h-3.5" />
                )}
              </div>{" "}
              Studio
            </div>
            <div
              className="p-3 flex items-center gap-3 cursor-pointer"
              onClick={() => handleUnitList("3½")}
            >
              <div className="w-4 h-4 border border-[#24211E] flex justify-normal items-center">
                {unitList.includes("3½") && (
                  <CheckIcon className="w-3.5 h-3.5" />
                )}
              </div>{" "}
              3½
            </div>
            <div
              className="p-3 flex items-center gap-3 cursor-pointer"
              onClick={() => handleUnitList("4½")}
            >
              <div className="w-4 h-4 border border-[#24211E] flex justify-normal items-center">
                {unitList.includes("4½") && (
                  <CheckIcon className="w-3.5 h-3.5" />
                )}
              </div>{" "}
              4½
            </div>
            <div
              className="p-3 flex items-center gap-3 cursor-pointer"
              onClick={() => handleUnitList("5½")}
            >
              <div className="w-4 h-4 border border-[#24211E] flex justify-normal items-center">
                {unitList.includes("5½") && (
                  <CheckIcon className="w-3.5 h-3.5" />
                )}
              </div>{" "}
              5½
            </div>
          </div>
          {unitList.length === 0 && isSubmitted && (
            <span className="mt-2 text-[#EF4A3C] text-[13px] leading-[16px]">
              Please select a desired unit.
            </span>
          )}

          <label
            htmlFor="message"
            className="block mt-3 text-sm text-[#8C682F]"
          >
            Message
          </label>
          <div className="mt-2">
            <Field
              as="textarea"
              className="w-full p-3 bg-[#E8E1CF] text-[#6C6042] placeholder:text-[#6C6042] rounded-bl-lg rounded-tr-lg border border-[#E8E1CF] border-opacity-50"
              name="message"
              placeholder="Allô..."
            />
          </div>

          <label
            htmlFor="communication"
            className="block mt-3 text-sm text-[#8C682F]"
          >
            * Communication
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

          <label
            htmlFor="communication"
            className="block my-5 text-sm text-[#24211E]"
          >
            * Required Fields
          </label>

          <button
            type="submit"
            onClick={() => setIsSubmitted(true)}
            className="mt-1 w-full py-2 bg-[#24211E] hover:bg-[#E0A94F] text-base lg:text-xl uppercase text-white hover:text-[#24211E] border border-[#24211E]"
          >
            Sign me up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
