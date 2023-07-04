import { Box, Stack, Typography } from "@mui/material"
import SideBar from "../SideBar"
import { useEffect, useState } from "react"
// import { fetchAPI } from "../../utils/fetchFromApi"
import {getByQuery} from '../../utils/yt-api';

import Videos from "../Videos/Videos"
import ErrorPage from "../ErrorPage";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Coding');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=> {
    // fetchAPI(`search?q=${selectedCategory}`).then((data) => setVideos(data.items));
    getByQuery(selectedCategory).then(response => setVideos(response.data.items)).catch(err => {
      // throw new Error(err.message)
      setError(true);

    });
  }, [selectedCategory])

  console.log("Hey Feed")

  if(error)
    return <ErrorPage />

  return (
    <Stack
      sx={{
          flexDirection: {sx: 'column', md: 'row'},
      }}
    >
      <Box
        sx={{
          height: {sx: 'auto', md: '95vh'},
          borderRight: '1px solid #3d3d3d',
          px: {sx: 0, md: 2}
      }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{color: 'white', mt: 1.5, textAlign: {sx: 'center'}}}>
          CopyRight is reserved
        </Typography>
      </Box>

      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }} display='flex' p={2} flexDirection={'column'}>
        <Typography variant="h4" fontWeight='bold' color='white' mb='1rem' ml='1rem'>
          {selectedCategory} <span style={{color: 'red'}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed