import React from "react";
import SearchInput from "../inputs/SearchInput";
import ContainedButton from "../buttons/ContainedButton";
const Hero = (): JSX.Element => {
  return (
    <div
      className=" bg-hero bg-no-repeat bg-cover bg-center mix-blend-darken pb-16 md:pb-12 sm:pb-8"
      id="#"
    >
      {/* <Navbar /> */}
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center my-20 md:mt-16 sm:mt-12 ">
          <SearchInput />
        </div>
        <div className="flex flex-col mt-40 md:mt-28 sm:mt-16 xs:mt-12 ml-28 md:ml-20 sm:ml-16 xs:ml-4">
          <h1 className="text-white text-5xl xs:text-3xl font-semibold max-w-header xs:max-w-mobile leading-11">
            Not sure where to go? Perfect.
          </h1>
          <ContainedButton color="dark" background="light" space={true}>
            Inspire Me!
          </ContainedButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
