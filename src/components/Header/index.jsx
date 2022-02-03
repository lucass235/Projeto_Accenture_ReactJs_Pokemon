import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import PokeAPI from '../../assets/pokeapi-logo.png';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isAuthenticader = localStorage.getItem("Autenticado");

  const handleMenuClick = (url) => {
    // history.push(url);
    setAnchorEl(null);
  };

  const handleLogout = () =>{
    localStorage.setItem("Autenticado", "false")
    navigate('/')

  };

  const handlePerfil = () =>{
    if (isAuthenticader === "false"){
      navigate('/')
    } else if (isAuthenticader === "true"){
      navigate('/perfil')
    }
  }

  const BOX_STYLES = {
    backgroundColor: '#FFF',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={ BOX_STYLES }>
          <img onClick={ () => navigate('/') } height="40" src={ PokeAPI } />
          <Typography className="pointer" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
            <div>
              {isMobile ? (
                <div>
                   <IconButton
                    size="large"
                    edge="start"
                    onClick={handleMenu}
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={ () => setAnchorEl(null) }
                  >
                    <MenuItem >Carrinho</MenuItem>
                    <MenuItem >Perfil</MenuItem>
                    <MenuItem >Deslogar</MenuItem>
                  </Menu>
                </div>
              ) : (
                <div>
                  <IconButton onClick={ () => navigate('/carrinho') } size="large" aria-label="show 4 new mails">
                    <Badge badgeContent={2} color="primary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <IconButton onClick={ () => handlePerfil() } size="large" aria-label="show 4 new mails">
                    <Badge color="primary">
                      <AccountCircleOutlinedIcon />
                    </Badge>
                  </IconButton>
                  { isAuthenticader === "true" ?  <IconButton onClick={ () => handleLogout() } size="large">
                    <Badge color="primary">
                      <LogoutOutlinedIcon />
                    </Badge>
                  </IconButton> : null}
                </div>
              )}
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}