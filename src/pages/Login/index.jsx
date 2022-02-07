import React, { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Styled } from './styles';
import { FormControl, Button, TextField }  from '@mui/material';
import logo from '../../assets/pokeapi-logo.png';
import * as yup from 'yup';
import getValidationErros from '../../constants/getValidationError';


export default function Chart() {
  const navigate = useNavigate();
  const [errorEmail, seterrorEmail] = useState(false);
  const [errorPasswd, seterrorPasswd] = useState(false);

  const authentication = useCallback( async () => {
    try{
    seterrorEmail(false)
    seterrorPasswd(false)
    const data = {
      email: document.getElementById("loginEmail").value,
      senha: document.getElementById("loginSenha").value
    }

    let schema = yup.object().shape({
      email: yup.string().required("E-mail obrigatorio").email(),
      senha: yup.string().min(6, "Senha tem que ter o minimo de 6 digitos"),
    });
    
    await schema.validate(data, {abortEarly: false})
    
    const users = JSON.parse(localStorage.getItem("users"))
    const res = await users.map(user => {
      if (data.email === user.email && data.senha === user.senha){
        localStorage.setItem("Autenticado", JSON.stringify(user));
        navigate('/home');
        return true
      }
      return false
    }).filter(user => user === true)
    
    if (res[0] !== true) alert("Erro ao fazer login") 

    }catch(error){
    const errors = getValidationErros(error)
    if (errors.email)
    {
      seterrorEmail(true)
    }
    if (errors.senha)
    {
      seterrorPasswd(true)
    }
    console.log(errors)
  }
  },[]);

    return (
      <>
        <Styled.Container> 
          <Styled.Content>
          <img src={logo} width="30%" alt="" /> 
          <FormControl style={{width:'90%'}}  >
          {errorEmail ? <TextField label={'E-mail'} type="email" id="loginEmail" error helperText="E-mail incorreto" margin="dense" /> : <TextField label={'E-mail'} type="email" id="loginEmail" margin="dense" /> }
          {errorPasswd ? <TextField label={'Senha'} type="password" id="loginSenha" error helperText="Senha incorreta" margin="dense" /> : <TextField label={'Senha'} type="password" id="loginSenha" margin="dense" />}
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