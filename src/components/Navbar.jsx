import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "./../utils/constants";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      p={"1rem"}
      gap={"1rem"}
      justifyContent={"space-between"}
      alignItems={{ xs: "center", lg: "flex-start" }}
      flexDirection={{ xs: "column", lg: "row" }}
    >
      <Link to="/">
        <Stack direction={"row"} alignItems={"center"} gap={"7px"}>
          <img
            // style={{ marginLeft: "1rem" }}
            src={logo}
            alt="logo"
            aria-label="logo"
            height="45"
          />

          <Typography
            variant="h5"
            color={"#fff"}
            sx={{
              backgroundcolor: "primary",
              // red with white gradient
              backgroundImage: `linear-gradient(120deg, #fff, #b50110)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            fontWeight={"bold"}
          >
            Snaptube
          </Typography>
        </Stack>
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
