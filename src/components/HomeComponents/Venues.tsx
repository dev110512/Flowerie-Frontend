import { Grid } from "@mui/material";
import type { FC } from "react";
import CityCard from "../cards/CityCard";
import { cities } from "../../assets/data/city";
import { CityType, VenueType } from "../../assets/data/types";
import React from "react";
import VenueCard from "../cards/VenueCard";
import { venues } from "../../assets/data/venue";
const Venues: FC = (): JSX.Element => {
  return (
    <div
      className="pl-28 py-28 md:pl-20 sm:pl-16 xs:pl-4 xs:pr-4 md:py-14 xs:py-8"
      id="venues"
    >
      <h1 className="font-regular text-black text-3xl xs:text-2xl">
        Explore Venues Nearby
      </h1>
      <div className="py-16 pr-28 xs:py-8 xs:pr-0">
        <Grid
          container
          rowSpacing={{ xs: 4, sm: 8 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        >
          {cities.map((city: CityType, index: React.Key | null) => (
            <CityCard
              city={city.city}
              distance={city.distance}
              img={city.img}
              key={index}
            />
          ))}
        </Grid>
      </div>
      <h1 className="font-regular text-black text-3xl xs:text-2xl">
        Luxe Locations
      </h1>
      <div className="mt-16 xs:mt-8 overflow-x-auto thin-scroll pb-2">
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          wrap="nowrap"
        >
          {venues.map((venue: VenueType, index: React.Key | null) => (
            <VenueCard venue={venue.venue} img={venue.img} key={index} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Venues;
