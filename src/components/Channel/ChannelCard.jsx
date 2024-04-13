import { CheckCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  console.log("Tumbnail", channel?.snippet?.thumbnails?.high.url);
  return (
    <Box sx={{ textAlign: "center", mt: "-1rem", mb: "1rem" }}>
      <Link to={`/channel/${channel?.id?.channelId || channel?.id}`}>
        <img
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          src={channel?.snippet?.thumbnails?.high.url}
          alt={channel?.title}
        />
        <Typography
          color="white"
          display="flex"
          gap="3px"
          justifyContent="center"
          alignItems="center"
        >
          {channel?.snippet?.title} <CheckCircle fontSize="10px" />
        </Typography>
        <Typography
          color="gray"
          fontSize={"0.8rem"}
          display="flex"
          gap="3px"
          justifyContent="center"
          alignItems="center"
        >
          {channel?.statistics &&
            parseInt(channel?.statistics?.subscriberCount).toLocaleString(
              "en-US"
            )}{" "}
          Subscripers
        </Typography>
      </Link>
    </Box>
  );
};

export default ChannelCard;
