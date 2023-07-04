import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import {logo} from './../utils/constants';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent={'space-between'}>
        <Link to='/'>
            <img style={{marginLeft: '1rem'}} src={logo} alt='logo' aria-label="logo" height='45'/>
        </Link>

        <SearchBar />
    </Stack>
  )
}

export default Navbar