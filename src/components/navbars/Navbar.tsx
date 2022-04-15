import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/Mesh.png";
import MoonSymbol from "../../assets/images/Moon Symbol.png";
import GeoghrapySymbol from "../../assets/images/Geography.png";
import Hamburger from "../../assets/images/Hamburger Menu.png";
import User from "../../assets/images/User.png";
import NavDropDown from "../popovers/NavDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNav from "../drawers/MobileNav";
import { navLinks } from "../../assets/data/navLinks";
import { NavLinksType } from "../../assets/data/types";
import NavLink from "../links/NavLink";

const Navbar = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const handleDropDownOpen = (
    event: React.MouseEvent<HTMLButtonElement | null>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropDownClose = () => {
    setAnchorEl(null);
  };

  const toggle = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollFunction = () => {
    let elem: HTMLElement | null = document.getElementById("homeNav");
    if (elem) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        // // elem.classList.add("bg-red-300");
        elem.style.backgroundColor = "#DF7E7E";
      } else {
        // elem.classList.remove("bg-red-300");
        elem.style.backgroundColor = "transparent";
      }
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
    };
  }, []);

  const dropDownOpen = Boolean(anchorEl);
  const id = dropDownOpen ? "nav-dropdown" : undefined;

  return (
    <div
      className="px-20 md:px-14 sm:px-8 xs:px-4 py-6 xs:py-4  flex items-center justify-between fixed top-0 w-full z-10 transition-colors duration-500 ease-in-out"
      id="homeNav"
    >
      <MobileNav
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggle}
        onOpen={toggle}
      />
      <div className="hidden sm:block">
        <MenuIcon
          className="text-white hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-pointer"
          sx={{ fontSize: "2rem" }}
          onClick={toggle}
        />
      </div>
      <div className="flex sm:hidden items-center">
        <img src={Logo} alt="logo" />
        <span className="ml-1 md:text-lg text-2xl white font-semibold">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Flowerie</a>
        </span>
      </div>
      <div className="flex sm:hidden items-center">
        {navLinks.map((item: NavLinksType, index: React.Key) => (
          <NavLink href={item.href} label={item.label} index={index} />
        ))}
      </div>
      <div className="flex items-center">
        <div className="sm:hidden block font-semibold md:text-lg text-2xl white cursor-pointer">
          Become a vendor
        </div>
        <div className="mx-8 cursor-pointer block sm:hidden">
          <img src={MoonSymbol} alt="moon_symbol" />
        </div>
        <div className="mr-8 cursor-pointer block sm:hidden">
          <img src={GeoghrapySymbol} alt="geography" />
        </div>
        <div className="px-2 bg-white rounded-full flex items-center justify-center">
          <button
            className="cursor-pointer"
            aria-describedby={id}
            onClick={handleDropDownOpen}
          >
            <img src={Hamburger} alt="hamburger" />
          </button>
          <NavDropDown
            id={id}
            open={dropDownOpen}
            anchorEl={anchorEl}
            handleClose={handleDropDownClose}
          />
          <img src={User} alt="user" className="pl-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
