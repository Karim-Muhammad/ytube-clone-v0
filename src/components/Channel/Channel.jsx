import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import ChannelCard from './ChannelCard';
import { getChannel } from '../../utils/yt-api';

const Channel = () => {
    const {id} = useParams();
    const [channelDetails, setChannelDetails] = useState(null);

    console.log("Channel", id);
    useEffect(()=> {
        getChannel(id).then(data => {
            setChannelDetails(data);
          });
    }, [])

  return (
    <Box>
        <Box>
            <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(101,9,121,1) 35%, rgba(0,212,255,1) 100%)',
            height: '300px',
            zIndex: 10,
            }} />
      </Box>
      <ChannelCard channel={channelDetails}/>

      <Outlet />
    </Box>
  )
}

export default Channel