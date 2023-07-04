import { Stack } from "@mui/material"
import {PlayCircle} from '@mui/icons-material'
import { Link } from "react-router-dom"
const SectionBar = ({ section, setSection, sections }) => {
  return (
    <Stack justifyContent={'center'} direction='row' sx={{my:3,height: {sx: 'auto', md: '95%'}, overflow: 'auto'}}>
      {sections.map((category) => (
          <button key={category} onClick={(evt)=> setSection(evt.target.innerText)} className={section === category? "category-btn active": "category-btn"}>
          <span className="icon"><PlayCircle/></span>
          <span className="name">{category}</span>
          </button>
      ))}
    </Stack>
  )
}

export default SectionBar