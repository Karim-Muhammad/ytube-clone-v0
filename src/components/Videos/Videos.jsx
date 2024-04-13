import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./../Channel/ChannelCard";
import Playlist from "./../Playlist/Playlist";

const Videos = ({ videos }) => {
  // videos.forEach(element => {
  //   console.log(element)
  // });

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      // gap={"calc(6% / 7)"}
      gap={"0.3rem"}
      width={{ xs: "100%", sm: "95%" }}
      mx={"auto"}
    >
      {videos?.map((one) => (
        <Box
          flexBasis={{ xs: "240px", sm: "300px", md: "320px", lg: "350px" }}
          // minWidth={{ xs: "240px", sm: "300px", md: "320px", lg: "350px" }}
          height={"auto"}
          display={"flex"}
          alignItems={"start"}
          sx={{ display: "flex" }}
          justifySelf={"center"}
          justifyContent={"center"}
          flexGrow="1"
          key={
            one?.id?.videoId || one?.id?.channelId || one?.resourceId?.videoId
          }
        >
          {(one?.id?.videoId || one?.resourceId?.videoId) && (
            <VideoCard video={one} />
          )}
          {one?.id?.channelId && <ChannelCard channel={one} />}
          {one?.id?.playlistId && <Playlist playlist={one} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
