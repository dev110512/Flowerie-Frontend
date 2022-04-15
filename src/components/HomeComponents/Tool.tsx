import React from "react";
import Logo from "../../assets/images/Mesh_Red.png";
import ContainedButton from "../buttons/ContainedButton";
const Tool: React.FC = (): JSX.Element => {
  return (
    <div
      className=" bg-tool bg-no-repeat bg-cover bg-center mb-24 sm:mb-16 xs:mb-12"
      id="suppliers"
    >
      <div className=" w-full h-full bg-white/30 px-28 md:px-20 sm:px-16 xs:px-4">
        <div className="flex flex-col pt-20 sm:pt-12 xs:pt-8">
          <div className="flex items-center ">
            <img
              src={Logo}
              alt="logo"
              className="w-24 h-24 sm:w-16 xs:w-12 sm:h-16 xs:h-12"
            />
            <span className="ml-3 sm:ml-2 xs:ml-1 text-6xl sm:text-4xl xs:text-3xl text-light-maroon font-semibold">
              Flowerie
            </span>
          </div>
          <div className="font-mark text-6xl sm:text-4xl xs:text-3xl text-black pl-52 sm:pl-36 xs:pl-28">
            MoodBoard
          </div>
          <div className="w-full flex justify-end">
            <div className="flex flex-col mt-20 mb-16 sm:mb-12 xs:mb-8">
              <h1 className="text-black text-5xl xs:text-3xl font-semibold max-w-[34rem] xs:max-w-[23rem] leading-11">
                Use our optimised event planning tool for your special day.
              </h1>
              <span className="font-regular text-helper text-2xl my-6">
                Manage every detail.
              </span>

              <ContainedButton color="light" background="dark">
                Try Free
              </ContainedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
