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
    <Stack direction="row" flexWrap="wrap" gap="9px">
      {videos?.map((one) => (
        <Box
          flexBasis={{ xs: "240px", sm: "320px", md: "350px" }}
          display={"flex"}
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
