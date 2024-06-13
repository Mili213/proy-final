import React from 'react'
import './NavBar.css'
import { MenuItem, Menu, Button} from '@mui/material';

const NavBar = () => {
  const [menuA, setMenuA]= React.useState(null);
  const open = Boolean(menuA);

  const handleClick=(event)=>{
    setMenuA(event.currentTarget);
  };
const handleClose=()=>{
  setMenuA(null)
}

  return (
    <div className='Nav'>
      <Button
       className='ButtonNav'
       aria-controls='menu-nav'
       aria-haspopup='true'
       onClick={handleClick}
       >
        Menú
      </Button>
      <Menu
      id='menu-nav'
      anchorEl={menuA}
      open={open}
      onClose={handleClose}
      anchorOrigin={{vertical: 'top',horizontal:'right',}}
      transformOrigin={{vertical:'top', horizontal:'right',}}
> 
    <MenuItem onClick={handleClose}>Categorias</MenuItem>
    <MenuItem onClick={handleClose}>Estado</MenuItem>
    <MenuItem onClick={handleClose}>Fav</MenuItem>
    </Menu>
    </div>
  )
}

export default NavBar
