import { AppBar } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <AppBar sx={{background: "black", display: "flex"}}>
        <NavLink to={'/'}>Home Page</NavLink>
        <NavLink to={'detail-page'}>Detail Page</NavLink>
    </AppBar>
    </>
    
  )
}

export default Header