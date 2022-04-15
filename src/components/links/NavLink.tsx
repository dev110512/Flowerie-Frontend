import React from "react";
import { useLocation } from "react-router-dom";
import type { NavLinksProps } from "../../assets/data/interfaces";

const NavLink = ({ href, label, index }: NavLinksProps): JSX.Element => {
  const location = useLocation();
  let match = location.hash === href;
  return (
    <div
      className="font-semibold white md:text-lg text-2xl flex flex-col items-center even:mx-12"
      key={index}
    >
      <a href={href}>
        <span>{label}</span>
      </a>
      {match && <div className="w-[3rem] h-1 bg-white rounded-full mt-0.5" />}
    </div>
  );
};

export default NavLink;
