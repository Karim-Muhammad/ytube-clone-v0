import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "./../utils/constants";

const Navbar = () => {
  return (
    <Stack direction="row" py={"10px"} justifyContent={"space-between"}>
      <Link to="/">
        <Stack direction={"row"} alignItems={"center"} gap={"7px"}>
          <img
            style={{ marginLeft: "1rem" }}
            src={logo}
            alt="logo"
            aria-label="logo"
            height="45"
          />

          <Typography color={"#EEE"}>Snaptube</Typography>
        </Stack>
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
