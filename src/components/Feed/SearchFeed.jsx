import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import {getByQuery} from '../../utils/yt-api';

import Videos from "../Videos/Videos"
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const {searchQuery} = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    getByQuery(searchQuery).then(response => {
      console.log(response.data)
      setVideos(response.data.items)
    });
  }, [searchQuery])

  console.log("Hey SearchFeed")

  return (
    <Stack
      sx={{
          flexDirection: {sx: 'column', md: 'row'},
      }}
    >
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }} display='flex' p={2} flexDirection={'column'}>
        <Typography variant="h4" fontWeight='bold' color='white' mb='1rem' ml='1rem'>
           Search For :<span style={{color: 'red'}}>{searchQuery}</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default SearchFeed