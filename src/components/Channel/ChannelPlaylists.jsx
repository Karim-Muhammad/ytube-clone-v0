import { Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPlaylist } from "../../utils/yt-api";
import Playlist from "./../Playlist/Playlist";

const ChannelPlaylists = (props) => {
  const [data, setData] = useState([]);
    const {id: channelId} = useParams(); // channelId

//   console.log("Channel ", channelId);
//   console.log("Params", useParams());

  useEffect(()=> {
    getPlaylist(channelId).then(data => {
        console.log(data)
        setData(data)
    });
  }, [])

    return (
        <Stack direction='row' className="flexBasis" flexWrap='wrap' justifyContent='start' alignItems='start' gap='5px'>
            {data?.map((playlist) => (
                <Playlist key={playlist?.id?.playlistId} playlist={playlist}/>
            ))}
        </Stack>
  )
}

export default ChannelPlaylists