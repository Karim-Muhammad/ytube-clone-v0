import { Box, CardContent, CardMedia, Typography, Badge } from "@mui/material";
import { PlayCircleFilled } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Playlist = ({ playlist }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "300px", md: "350px" },
        flexGrow: 1,
      }}
    >
      {console.log(playlist.id)}
      <Link
        to={`/channel/${playlist?.snippet?.channelId}/playlist/${
          playlist?.id?.playlistId || playlist?.id
        }`}
      >
        <CardMedia
          image={playlist?.snippet?.thumbnails?.high?.url}
          sx={{ width: "100%", height: "270px", objectFit: "cover" }}
        />
      </Link>
      <CardContent sx={{ position: "relative" }}>
        <Badge
          sx={{ position: "absolute", left: "10px", top: "0px" }}
          badgeContent="Playlist"
          color="success"
        >
          <PlayCircleFilled color="action" />
        </Badge>

        <Typography color={"white"} variant="subtitle1">
          {playlist?.snippet?.title}
        </Typography>
        <Typography color={"white"} variant="subtitle2">
          {playlist?.snippet?.description}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Playlist;
