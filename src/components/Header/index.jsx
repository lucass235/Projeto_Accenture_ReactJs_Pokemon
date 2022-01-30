import React, { useState } from 'react';
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import PokeAPI from '../../assets/pokeapi-logo.png';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const toHome = () => {
  //   history.push('/');
  // };

  const handleMenuClick = (url) => {
    // history.push(url);
    setAnchorEl(null);
  };

  const BOX_STYLES = {
    backgroundColor: '#FFF',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={ BOX_STYLES }>
          <img height="40" src={ PokeAPI } />
          <Typography className="pointer" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Poke Market
          </Typography>
            <div>
              {isMobile ? (
                <div>
                   <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
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
                    <MenuItem onClick={ () => handleMenuClick('/') }>Home</MenuItem>
                    <MenuItem onClick={ () => handleMenuClick('/geracoes') }>Gerações</MenuItem>
                    <MenuItem onClick={ () => handleMenuClick('/categorias') }>Categorias</MenuItem>
                    <MenuItem onClick={ () => handleMenuClick('/sobre') }>Sobre</MenuItem>
                  </Menu>
                </div>
              ) : (
                <div>
                  <Link className="nav-links" to="/">Home</Link>
                </div>
              )}
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}