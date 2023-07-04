import { Box, Typography } from '@mui/material';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getVideosByChannel } from './../../utils/yt-api';

import SectionBar from './../SectionBar';
import Videos from './../Videos/Videos';
import ChannelPlaylists from './ChannelPlaylists';

const ChannelDetails = (props) => {
  const {id} = useParams(); // channelId
  const [section, setSection] = useState('Home'); // home, playlist
  const [videos, setVideos] = useState([]);

  useEffect(()=> {

    if(section === 'Home') {
      getVideosByChannel(id).then(data => {
        setVideos(data.items);
      })

    }

  }, [])

  let content;

  if(section === 'Home') {
    if(videos.length) {
      content = <Videos videos={videos}/>;
    }else {
      content = <Typography textAlign={'center'} color={'gray'} fontSize={'0.8rem'}>No Videos in This Channel</Typography>;
    }
  }else {
    content = <ChannelPlaylists channelId={id}/>
  }


  return (
    <>
      <SectionBar section={section} setSection={setSection} sections={['Home', 'Playlist']}/>
      <Box minHeight={'95vh'}>
        {content}
      </Box>
    </>
  )
}

export default ChannelDetails