import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import { Navbar, Feed, SearchFeed, ChannelDetails, VideoDetails } from './components'
import ChannelPlaylist from './components/Channel/ChannelPlaylist';
import Channel from './components/Channel/Channel';
import ErrorPage from './components/ErrorPage';
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} errorElement={<ErrorPage />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/channel/:id' element={<Channel/>} >
            <Route index element={<ChannelDetails />}/>
            <Route path='playlist/:playlistId' element={<ChannelPlaylist />}/>
          </Route>
          <Route path='/search/:searchQuery' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
