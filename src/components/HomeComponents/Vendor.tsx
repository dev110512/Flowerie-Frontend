import React from "react";
import ContainedButton from "../buttons/ContainedButton";
const Vendor: React.FC = (): JSX.Element => {
  return (
    <div
      className=" bg-vendor bg-no-repeat bg-cover bg-center w-[88%] xs:w-[90%]  mx-auto rounded-3xl mb-24 sm:mb-16 xs:mb-12"
      id="shop"
    >
      <div className=" w-full h-full flex flex-col  px-28 md:px-20 sm:px-16 xs:px-4 pt-96 md:pt-64 sm:pt-40 xs:pt-20 pb-16 sm:pb-12 xs:pb-8">
        <h1 className="text-white text-6xl sm:text-4xl xs:text-3xl font-semibold  leading-11">
          Become a Vendor
        </h1>
        <span className="font-regular text-white text-2xl sm:text-xl xs:text-sm my-4 sm:my-2">
          Earn extra income by sharing your services.
        </span>

        <ContainedButton color="light" background="dark">
          Learn More
        </ContainedButton>
      </div>
    </div>
  );
};

export default Vendor;
