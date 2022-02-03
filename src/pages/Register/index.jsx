import React from 'react';
import { Styled } from './styles';
import { Formik } from 'formik';
import {FormControl, Button, TextField}  from '@mui/material';
import logo from './Assets/logo.png'


export default function Chart() {
    return (
      <>
        <Styled.Container>
          <Styled.Content>
          <img src={logo} width="30%" alt="" />
          <FormControl style={{width:'90%'}} >
            <TextField label={'Nome'} type="text" id="registroNome" margin="dense" /> 
            <TextField label={'E-mail'} type="mail" id="registroEmail" margin="dense" />
            <TextField label={'Senha'} types="password" id="registroSenha" margin="dense" />
          </FormControl>
            <Styled.ButtonLoginContent>
              <Button variant="outlined" size="medium" color="error">
                Cadastrar
              </Button>
              <Button variant="outlined" size="medium" color="error">
                Voltar
              </Button>
            </Styled.ButtonLoginContent>
          </Styled.Content>
        </Styled.Container>
      </>
  );
}