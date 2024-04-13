import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./../Videos/VideoCard";

const PlaylistItems = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap="0.3rem">
      {videos?.map((one) => (
        <Box
          sx={{ width: { xs: "100%", sm: "300px", md: "350px" } }}
          flexGrow="1"
          key={one?.snippet?.id || one?.snippet?.resourceId?.videoId}
        >
          {(one?.snippet?.id?.videoId || one?.snippet?.resourceId?.videoId) && (
            <VideoCard video={one} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default PlaylistItems;
