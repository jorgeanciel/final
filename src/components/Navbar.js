import { AppBar, Toolbar, Typography, styled, Box, InputBase, Avatar, MenuList, MenuItem, Menu, Button } from '@mui/material'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState , useContext} from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import Pages from './Page'
import { DataContext } from "../context/DataProvider";


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
});

const Search = styled("div")(({theme}) =>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}))

const Icons = styled(Box)(({theme}) =>({
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserBox = styled(Box)(({theme}) =>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))

export const Navbar = () => {

    const value = useContext(DataContext);
    const [carrito] = value.carrito;
    const [menu, setMenu] = value.menu;
    const [open, setOpen] = useState(false);
 
    
    const toogleMenu = () =>{
        setMenu(!menu)
      }

      
  return (
    
    <AppBar position='sticky' component="nav" sx={{background:"#C66B15"}}>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
                Shoes Fantasma
            </Typography>
            <PetsIcon sx={{display:{xs:"block", sm:"none"}}}/>
            <Search>
                <InputBase placeholder='search..'/>
            </Search>
            
            <Icons>
                
                <Badge badgeContent={carrito.length} color="error" onClick={toogleMenu}>
                    <ShoppingCartIcon />
                    
                </Badge>
                <Avatar 
                    alt="Remy Sharp" 
                    src="/static/images/avatar/1.jpg" 
                    sx={{width:"30px", height:"30px"}}
                    onClick={e=>setOpen(true)}/>
            </Icons>
        </StyledToolbar>
    </AppBar>
   
  )
}
