import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlaylistItems } from '../../utils/yt-api';
import PlaylistItems from './../Playlist/PlaylistItems';

const ChannelPlaylist = () => {
    const {playlistId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(()=> {
        getPlaylistItems(playlistId).then(data => setItems(data.items));
    }, [])
  return (
    <Box>
        <PlaylistItems videos={items}/>
    </Box>
  )
}

export default ChannelPlaylist