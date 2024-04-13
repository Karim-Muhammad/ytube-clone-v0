import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistItems } from "../../utils/yt-api";
import PlaylistItems from "./../Playlist/PlaylistItems";
import { Blocks } from "react-loader-spinner";

const ChannelPlaylist = () => {
  const [loading, setLoading] = useState(true);
  const { playlistId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPlaylistItems(playlistId).then((data) => {
      setLoading(false);
      setItems(data.items);
    });
  }, []);
  return (
    <Box>
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

      {!loading && !items.length && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Typography>No Videos in this Playlist</Typography>
        </Box>
      )}

      {!loading && items.length && <PlaylistItems videos={items} />}
    </Box>
  );
};

export default ChannelPlaylist;
