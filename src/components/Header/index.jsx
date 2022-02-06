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
import Modal from 'react-modal';
import PokeAPI from '../../assets/pokeapi-logo.png';
import Styled from './styles.js';
import { Button, TextField } from '@mui/material';
import { useCallback } from 'react';
import * as yup from 'yup';
import getValidationErros from '../../constants/getValidationError';
import {countries, gens} from '../../constants/lists' 



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '11'
  },
  overlay: {  
  zIndex: '10'
  },
};

export default function Header({handleOpen}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [errorName, seterrorName] = useState(false);
  const [errorFuncao, seterrorFuncao] = useState(false);
  Modal.setAppElement('#root');
  const [userLog, setuserLog] = useState(() => 
  {
    const log = JSON.parse(localStorage.getItem("Autenticado"))
    return log;
  });

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
    } else {
      handleOpenProfile()
    }
  }
   
  const handleOpenProfile = () => {
    setIsOpen(true)
  }

  const [gen, setGen] = useState(() => {return userLog.genero});
  const [country, setCountry] = useState(() => {return userLog.pais})
  const [oldData, setoldData] = useState([])

  const handleAttProfile = useCallback( async () => {
    try{
      seterrorName(false)
      seterrorFuncao(false)
      const data = {
        name: document.getElementById("perfilNome").value,
        email: userLog.email,
        senha: userLog.senha,
        imagem: "teste",
        genero: gen,
        pais: country,
        funcao: document.getElementById("funçãoOrigem").value
      }
      
    let schema = yup.object().shape({
      name: yup.string().required("Nome obrigatorio"),
      funcao: yup.string().required("função obrigatoria"),
      email: yup.string(),
      senha: yup.string(),
      pais: yup.string(),
      genero: yup.string(),
      image: yup.string(),
    });
    
    await schema.validate(data, {abortEarly: false})
      setuserLog(data)
      setoldData(() => {
        JSON.parse(localStorage.getItem("users"))
      })
      console.log(oldData)
      const newData = oldData.filter((user) => 
        user.email !== userLog.email && user.senha !== userLog.senha
      )
      setoldData([...newData, data])
      localStorage.setItem("users", JSON.stringify(oldData))
      localStorage.setItem("Autenticado", JSON.stringify(userLog))

    }
    catch(error){
      console.log(error)
       const errors = getValidationErros(error)
      if (errors.name)
      {
        seterrorName(true)
      }
      if (errors.funcao)
      {
      seterrorFuncao(true)
      }
    }},[gen, country, seterrorName, seterrorFuncao, setuserLog, userLog, oldData, setoldData])

    const handleChange = (event) => {
      setGen(event.target.value);
    };
  
    const handleChangeC = (event) => {
      setCountry(event.target.value);
    };

  const BOX_STYLES = {
    backgroundColor: '#FFF',
  };


  return (
    <>
    {/* Modal do perfil */}
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => {setIsOpen(false)}}
    style={customStyles}
    contentLabel="Example Modal"
  >
    
    <Styled.Close onClick={() => {setIsOpen(false)}}>X</Styled.Close>
    <Styled.Title>Dados pessoais</Styled.Title>
    <Styled.Container>
      <Styled.Avatar_Container>
      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tgQ6O5s4XE6-Q7ItFa-pLoNhk4zQF464CQ&usqp=CAU'} />
      </Styled.Avatar_Container>
      <Styled.ContentForm>
          {errorName ? <TextField error helperText="O campo não pode ser vazio" id="perfilNome" label="Nome" variant="outlined" defaultValue={userLog.name}/> :  <TextField id="perfilNome" label="Nome" variant="outlined" defaultValue={userLog.name}/>}
          <TextField
            id="registroGenero"
            select
            label="Gênero"
            value={gen}
            onChange={handleChange}
            defaultValue={userLog.genero}
          >
            {gens.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        <Styled.Buttom>
          <Button onClick={handleAttProfile} variant="outlined" size="medium" color="error">
            Salvar
          </Button>
        </Styled.Buttom>
      </Styled.ContentForm>
      <Styled.ContentForm>
        <TextField
          id="registroPais"
          select
          label="Pais"
          value={country}
          onChange={handleChangeC}
          defaultValue={userLog.pais}
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {errorFuncao ? <TextField id="funçãoOrigem" error helperText="Incorrect entry" label="Função" variant="outlined" defaultValue={userLog.funcao}/> : <TextField id="funçãoOrigem" label="Função" variant="outlined" defaultValue={userLog.funcao}/>}
      <Styled.Buttom>
      <Button onClick={ () => navigate('/home') } variant="outlined" size="medium" color="error">
        Voltar
      </Button>
      </Styled.Buttom>
      </Styled.ContentForm>
      
      
      
    </Styled.Container>
  </Modal>

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
                  { isAuthenticader === "false" ?  null : <IconButton onClick={ () => handleLogout() } size="large">
                    <Badge color="primary">
                      <LogoutOutlinedIcon />
                    </Badge>
                  </IconButton>}
                </div>
              )}
            </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}