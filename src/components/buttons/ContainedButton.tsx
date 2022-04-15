import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  background: "dark" | "light";
  color: "dark" | "light";
  space?: boolean | null;
}

const ContainedButton: React.FC<ButtonProps> = ({
  children,
  background,
  color,
  space,
}): JSX.Element => {
  return (
    <button
      className={`${
        background === "dark" ? "bg-dark" : "bg-white"
      } px-8 md:px-6 sm:px-4  py-6 md:py-4  ${
        color === "dark" ? "text-black" : "text-white"
      }  
        ${space ? "mt-12 md:mt-8 sm:mt-6" : "mt-0"}
        font-regular text-2xl xs:text-sm rounded-20 xs:rounded-2xl w-max  hover:scale-105 transition-transform duration-300 drop-shadow-lg
        `}
    >
      {children}
    </button>
  );
};

export default ContainedButton;
