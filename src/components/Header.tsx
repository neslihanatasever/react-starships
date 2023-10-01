import { AppBar } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <AppBar sx={{background: blueGrey, width: 500}}>
        <NavLink to={'/'}>Home Page</NavLink>
        <NavLink to={'detail-page'}>Detail Page</NavLink>
    </AppBar>
    </>
    
  )
}

export default Header