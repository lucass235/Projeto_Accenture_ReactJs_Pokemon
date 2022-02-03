import React from 'react';
import { useNavigate } from "react-router-dom";
import { Styled } from './styles';
import { Formik } from 'formik';
import {FormControl, Button, TextField, Box, RedBar}  from '@mui/material';
import logo from './Assets/logo.png'

export default function Chart() {
  const navigate = useNavigate();
    return (
      <>
        <Styled.Container>
          <Styled.Content>
          <img src={logo} width="30%" alt="" />
          <FormControl style={{width:'90%'}} >
            <TextField label={'E-mail'} type="mail" id="loginEmail" margin="dense" />
            <TextField label={'Senha'} types="password" id="loginSenha" margin="dense" />
            <Styled.Paragrafo href="/">Esqueci minha senha</Styled.Paragrafo>
          </FormControl>
            <Styled.ButtonLoginContent>
              <Button onClick={ () => navigate('/home') } variant="outlined" size="medium" color="error">
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