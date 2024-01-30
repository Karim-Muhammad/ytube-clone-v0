import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { getRelatedVideos, getVideo } from "../../utils/yt-api";
import Videos from "./Videos";

import { Blocks } from "react-loader-spinner";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const promise1 = getVideo(id)
      .then((data) => {
        setVideoDetails(data.items[0]);
        return data;
      })
      .then((data) => {
        console.log("=====", data);
        getRelatedVideos(data.items[0].snippet.categoryId).then((inner_data) =>
          setRelatedVideos(inner_data.items)
        );
      });

    promise1.then(() => setLoading(false)).catch((err) => setLoading(false));
  }, []);
  console.log(videoDetails);
  if (videoDetails === null) return <Blocks color="#FF0000" />;

  const { snippet, statistics } = videoDetails;
  return (
    <Box minHeight={"95vh"}>
      <Stack sx={{ flexDirection: { md: "row", sm: "column" } }}>
        <Stack sx={{ flexDirection: { md: "row", sm: "column" } }}>
          <Box sx={{ flex: 2, width: "100%", position: "sticky", top: "0" }}>
            <div style={{ borderRadius: "2rem", marginRight: "2rem" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                className="react-player"
              />
            </div>

            <Box
              sx={{
                px: "1.3rem",
                py: "0.9rem",
                display: "flex",
                flexDirection: "column",
                gap: "7px",
              }}
            >
              <Typography color={"#EEE"} mb={"5px"} variant="h6">
                {snippet?.title}
              </Typography>

              <Typography
                height={"70px"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
                color={"gray"}
              >
                {snippet?.description}
              </Typography>
            </Box>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${snippet?.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          {/* <RelatedVideos /> */}
        </Stack>
        <Box flex={1}>
          <Typography variant="h5" color={"gray"}>
            Related <span color="red">Videos</span>
          </Typography>
          <Videos videos={relatedVideos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
