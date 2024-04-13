import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getByQuery } from "../../utils/yt-api";

import Videos from "../Videos/Videos";
import { useParams } from "react-router-dom";
import { Blocks } from "react-loader-spinner";

const SearchFeed = () => {
  const [loading, setLoading] = useState(false);
  const { searchQuery } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setLoading(true);

    getByQuery(searchQuery).then((response) => {
      console.log(response.data);
      setLoading(false);
      setVideos(response.data.items);
    });
  }, [searchQuery]);

  console.log("Hey SearchFeed");

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
        display="flex"
        p={2}
        flexDirection={"column"}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="white"
          mb="1rem"
          ml="1rem"
        >
          Search For :<span style={{ color: "red" }}>{searchQuery}</span>
        </Typography>

        {loading && (
          <Box
            height={"100vh"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Blocks color="#AE2019" />
          </Box>
        )}

        {!loading && <Videos videos={videos} />}

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
