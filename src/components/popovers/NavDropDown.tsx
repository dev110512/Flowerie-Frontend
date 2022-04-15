import type { FC } from "react";
import Popover from "@mui/material/Popover";

interface NavDropDownProps {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose(): void;
}

const NavDropDown: FC<NavDropDownProps> = ({
  id,
  open,
  anchorEl,
  handleClose,
}): JSX.Element => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <div className="w-36">
        <ul>
          <li className="p-4 font-semibold text-l border-slate border-b border-solid hover:text-maroon focus:text-maroon cursor-pointer transition-colors hover:bg-maroon-300 duration-300">
            Log in
          </li>
          <li className="p-4 font-semibold text-l border-slate border-b border-solid hover:text-maroon focus:text-maroon cursor-pointer transition-colors hover:bg-maroon-300 duration-300">
            Sign up
          </li>
        </ul>
      </div>
    </Popover>
  );
};

export default NavDropDown;
