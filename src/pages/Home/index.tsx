import React from "react";
import Hero from "../../components/HomeComponents/Hero";
import Venues from "../../components/HomeComponents/Venues";
import Tool from "../../components/HomeComponents/Tool";
import Vendor from "../../components/HomeComponents/Vendor";
import Navbar from "../../components/navbars/Navbar";
const index = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Hero />
      <Venues />
      <Tool />
      <Vendor />
    </>
  );
};

export default index;
