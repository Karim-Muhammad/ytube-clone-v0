import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction='row' sx={{flexDirection: {md: 'column'}, height: {sx: 'auto', md: '95%'}, overflow: 'auto'}}>
      {categories.map((category) => (
        <button onClick={(evt)=> setSelectedCategory(evt.target.innerText)} key={category.name} className={selectedCategory === category.name? "category-btn active": "category-btn"}>
          <span className="icon">{category.icon}</span>
          <span className="name">{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar