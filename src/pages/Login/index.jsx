import React from 'react';
import { useNavigate } from "react-router-dom";
import { Styled } from './styles';
import { Formik } from 'formik';
import {FormControl, Button, TextField, Box, RedBar}  from '@mui/material';
import logo from './Assets/logo.png'

export default function Chart() {
  const navigate = useNavigate();
  
  const authentication = () => {
    const data = {
      email: document.getElementById("loginEmail").value,
      senha: document.getElementById("loginSenha").value
    }
    
    const users = JSON.parse(localStorage.getItem("users"))
    if (data.email === users.email && data.senha === users.senha){
      localStorage.setItem("Autenticado", "true")
      navigate('/home')
    } else {
      alert("errado")
    }

  }

    return (
      <>
      
        <Styled.Container> 
          <Styled.Content>
          <img src={logo} width="30%" alt="" /> 
          <FormControl style={{width:'90%'}} >
            <TextField label={'E-mail'} type="email" id="loginEmail" margin="dense" />
            <TextField label={'Senha'} type="password" id="loginSenha" margin="dense" />
            <Styled.Paragrafo href="/">Esqueci minha senha</Styled.Paragrafo>
          </FormControl>
            <Styled.ButtonLoginContent>
              <Button onClick={ () => authentication() } variant="outlined" size="medium" color="error">
                Entrar
              </Button>
              <Button onClick={ () => navigate('/register') } variant="outlined" size="medium" color="error">
                Cadastro
              </Button>
            </Styled.ButtonLoginContent>
          </Styled.Content>
        </Styled.Container>
      </>
  );
}