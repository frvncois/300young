import clsx from "clsx";
import React from "react";
import CookiesTypeTable from "./CookiesTypeTable";
import { table1, table2 } from "@/data/cookiePolicyData";

import PerformanceCookiesM from "./PerformanceCookiesM";
import TargetingCookiesM from "./TargetingCookiesM";
const Title = ({ title, className }) => (
  <p
    className={clsx(
      "sm:text-[18px] text-[16px] sm:leading-[27px] leading-[20px] font-bold mb-1",
      className
    )}
  >
    {title}
  </p>
);
const Title2 = ({ title }) => (
  <p className="text-base font-bold mb-1">{title}</p>
);

const Text = ({ text, className }) => (
  <div
    className={clsx("sm:text-base text-sm mb-[30px]", className)}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

function PrivacyPolicy() {
  return (
    <div className="container px-0 sm:bg-[url(/assets/privecy-policy-bg.webp)] bg-[url(/assets/privecy-policy-bg-m.webp)] sm:min-h-[1941px] bg-[length:100px] bg-right-top sm:bg-contain bg-no-repeat">
      <div className="lg:pt-[194px] sm-[160px] pt-[140px] max-w-[1253px] 2xl:pr-[100px] pb-[100px] 2xl:w-full lg:w-9/12 w-full px-4 mx-auto">
        <h2 className="uppercase sm:text-[66px] text-[24px] sm:leading-[84px] leading-[26px] font-bold mb-[30px]">
          PRIVACY POLICY
        </h2>
        <p className="sm:text-[22px] text-[14px] sm:leading-[28px] leading-[18px] font-light mb-[30px]">
          Effective Date 8-dec-2023
        </p>
        <Text
          text="<span class='mb-2 block'>This Privacy Policy describes the policies of 300YOUNG, Montréal, QC
          H3C 2G2, Canada operated by Omnia Technologies, on the collection, use
          and disclosure of your information that we collect when you use our
          website (https://300young.ca). (the “Service”). By accessing or using
          the Service, you are consenting to the collection, use and disclosure
          of your information in accordance with this Privacy Policy. If you do
          not consent to the same, please do not access or use the Service.
          </span> We may modify this Privacy Policy at any time without any prior
          notice to you and will post the revised Privacy Policy on the Service.
          The revised Policy will be effective 180 days from when the revised
          Policy is posted in the Service and your continued access or use of
          the Service after such time will constitute your acceptance of the
          revised Privacy Policy. We therefore recommend that you periodically
          review this page."
        />

        <Title title="How We Use Your Information" />
        <Text
          text="<span class='mb-2 block'>We will use the information that we collect about you for the following purposes:</span>
          <span class='mb-2 block'>Marketing/ Promotional</span>
          <span class='mb-2 block'>Targeted advertising</span>
          If we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which grant consent unless we are required to do otherwise by law."
        />

        <Title title="How We Share Your Information" />
        <Text
          text="<span class='block mb-2'>We will not transfer your personal information to any third party without seeking your consent, except in limited circumstances as described below:</span>
          <ul class='mb-2 list-disc pl-4'>
          <li>Ad service</li>
          <li>Analytics</li>
          <li>Data collection & process</li>
          </ul>
          <span class='block mb-2'>We require such third party’s to use the personal information we transfer to them only for the purpose for which it was transferred and not to retain it for longer than is required for fulfilling the said purpose.</span>
          We may also disclose your personal information for the following: (1) to comply with applicable law, regulation, court order or other legal process; (2) to enforce your agreements with us, including this Privacy Policy; or (3) to respond to claims that your use of the Service violates any third-party rights. If the Service or our company is merged or acquired with another company, your information will be one of the assets that is transferred to the new owner."
        />

        <Title title="Your Rights" />
        <Text
          text="<span class='block mb-2'>Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at <a href='mailto:info@omniatechnologies.com' class='underline'>info@omniatechnologies.com</a>. We will respond to your request in accordance with applicable law.</span>
          Do note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought."
        />

        <Title title="Cookie Policy" className="!mb-3.5" />
        <Title2 title="What are cookies?" />
        <Text
          className="!mb-3.5"
          text="<span class='block mb-2'>This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to manage the cookie settings.</span>
          Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement."
        />
        <Title2 title="How do we use cookies?" />

        <Text
          className="!mb-3.5"
          text="<span class='block mb-2'>As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.</span>
          The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website."
        />

        <Title2 title="Types of Cookies we use" />
        <div className="sm:block hidden">
          <CookiesTypeTable table={table1} />
          <CookiesTypeTable table={table2} />
        </div>
        <div className="sm:hidden flex flex-col gap-3.5 mb-3.5">
          <PerformanceCookiesM />
          <TargetingCookiesM />
        </div>

        <Title2 title="Your choices regarding cookies" />
        <Text
          className="!mb-3.5"
          text="You have certain choices when it comes to the placing of cookies on your device. You may choose to accept or deny any functional or marketing cookies. You can control your cookie choices through your browser, where you can instruct it to delete or refuse cookies. You can visit the help center of your browser, the 'Tools', 'Edit', or 'Help' pages to set your cookie preferences and delete cookies. We also encourage you to visit aboutcookies.org to learn more about how to opt out of cookies."
        />
        <Title2 title="Questions" />
        <Text
          className="!mb-3.5"
          text="If you have any questions about this Cookie Policy, please contact us at <a href='mailto:info@omniatechnologies.com' class='underline'>info@omniatechnologies.com</a>."
        />
        <Title2 title="Security" />
        <Text
          className="!mb-3.5"
          text="The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk."
        />
        <Title2 title="Third Party Links & Use Of Your Information" />
        <Text
          className="!mb-3.5"
          text="Our Service may contain links to other websites that are not operated by us. This Privacy Policy does not address the privacy policy and other practices of any third parties, including any third party operating any website or service that may be accessible via a link on the Service. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services."
        />
        <Title2 title="Grievance / Data Protection Officer" />
        <Text text="If you have any questions or concerns about this Privacy Policy, or if you wish to file a complaint, please contact our Privacy Officer by email at <a href='mailto:info@omniatechnologies.com' class='underline'>info@omniatechnologies.com</a>." />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
