import { Grid } from "@mui/material";
import type { FC } from "react";

interface CityCardProps {
  venue: string;
  img: string;
}

const VenueCard: FC<CityCardProps> = ({ venue, img }): JSX.Element => {
  return (
    <Grid item>
      <div className="flex flex-col cursor-pointer hover:scale-90 transition-transform duration-300">
        <div className="w-venue-w h-venue-h overflow-hidden xs:w-venue-mobile-w xs:h-venue-mobile-h sm:w-venue-tablet-w sm:h-venue-tablet-h">
          <img src={img} alt="city" className="w-full h-full rounded-20" />
        </div>
        <span className="font-regular text-3xl xs:text-xs sm:text-xl text-black mt-8 xs:mt-4 sm:mt-6">
          {venue}
        </span>
      </div>
    </Grid>
  );
};

export default VenueCard;
