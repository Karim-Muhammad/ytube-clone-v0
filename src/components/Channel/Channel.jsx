import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import { getChannel } from "../../utils/yt-api";
import { Blocks } from "react-loader-spinner";

const Channel = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("Channel", id);
  useEffect(() => {
    setLoading(true);
    getChannel(id)
      .then((data) => {
        setLoading(false);
        setChannelDetails(data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(101,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        />
      </Box>

      <ChannelCard channel={channelDetails} />

      {loading && <Blocks />}
      {!loading && <Outlet />}
    </Box>
  );
};

export default Channel;
