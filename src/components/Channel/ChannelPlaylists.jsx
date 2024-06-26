import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlaylist } from "../../utils/yt-api";
import Playlist from "./../Playlist/Playlist";
import { Blocks } from "react-loader-spinner";

const ChannelPlaylists = (props) => {
  const [data, setData] = useState([]);
  const { id: channelId } = useParams(); // channelId
  const [loading, setLoading] = useState(true);

  //   console.log("Channel ", channelId);
  //   console.log("Params", useParams());

  useEffect(() => {
    setLoading(true);

    getPlaylist(channelId)
      .then((data) => {
        setTimeout(() => {
          setData(data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
      }, []);
  }, []);

  return (
    <Stack
      direction="row"
      className="flexBasis"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap="5px"
    >
      {loading && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Blocks type="ThreeDots" color="#00BFFF" height={100} width={100} />
        </Box>
      )}

      {!loading &&
        data?.map((playlist) => (
          <Playlist key={playlist?.id?.playlistId} playlist={playlist} />
        ))}
    </Stack>
  );
};

export default ChannelPlaylists;
