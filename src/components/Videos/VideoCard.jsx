import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import {demo} from './../../utils/constants'

const VideoCard = ({ video }) => {
    const {snippet} = video;

    const videoObject = {};
    if(video?.id?.videoId) {
        videoObject.id = `/video/${video?.id?.videoId}`
    }else if (video?.resourceId?.videoId) {
        videoObject.id += `/video/${video?.resourceId?.videoId}`;
    }else 
        videoObject.id += `/video/${demo['VideoUrl']}`;

    console.log("video id", videoObject.id);

    return (
    <Card sx={{ width: { xs: '100%', sm: '300px', md: "350px", }, boxShadow: "none", borderRadius: 0 }} >
        <Link to={videoObject.id}>
            <CardMedia image={snippet?.thumbnails?.high?.url || demo['ThumbnailUrl']} alt={snippet?.title} 
                sx={{ width: { xs: '100%', sm: '300px'}, height: 180 }} 
            />
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E",}}>
            <Link to={videoObject.id} >
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0, 60) || demo['VideoTitle'].slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demo['ChannelUrl']} >
                <Typography variant="subtitle2" color="gray">
                {snippet?.channelTitle || demo['ChannelTitle']}
                <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard