import React, {useCallback, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Styled } from './styles';
import { Formik } from 'formik';
import {FormControl, Button, TextField, MenuItem}  from '@mui/material';
import logo from './Assets/logo.png'
import * as yup from 'yup';
import getValidationErros from '../../constants/getValidationError';


export default function Register() {
  const navigate = useNavigate();
  const [errorEmail, seterrorEmail] = useState(false);
  const [errorPasswd, seterrorPasswd] = useState(false);
  const [errorName, seterrorName] = useState(false);
  const [gen, setGen] = useState('');
  const [country, setCountry] = useState('')
 
  
  const authentication = useCallback( async () => {
    try{
    seterrorEmail(false)
    seterrorPasswd(false)
    seterrorName(false)

    const data = {
      name: document.getElementById("registroNome").value,
      email: document.getElementById("registroEmail").value,
      senha: document.getElementById("registroSenha").value,
      imagem: "teste",
      genero: gen,
      pais: country,
      funcao: "Aprendiz pokemon"
    }
    

    let schema = yup.object().shape({
      name: yup.string().required("Nome obrigatorio"),
      email: yup.string().required("E-mail obrigatorio").email(),
      senha: yup.string().min(6, "Senha tem que ter o minimo de 6 digitos"),

    });
    
    await schema.validate(data, {abortEarly: false})
    const oldData = JSON.parse(localStorage.getItem("users"))
    if (oldData)
    {
      const newData = oldData.concat(data)
      localStorage.setItem("users", JSON.stringify(newData))
    } else {
      const newData = [data]
      localStorage.setItem("users", JSON.stringify(newData))
    }
    navigate("/");

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
    if (errors.name)
    {
      seterrorName(true)
    }
    console.log(errors)
  }
  },[]);

  const gens = [
    {
      value: 'fem',
      label: 'Feminino',
    },
    {
      value: 'mas',
      label: 'Masculino',
    },
    {
      value: 'others',
      label: 'Outros',
    },
    {
      value: 'nDeclarar',
      label: 'Prefiro não declarar',
    },
  ];

  const countries = [
    {
      value: 'BR',
      label: 'Brasil',
    },
    {
      value: 'US',
      label: 'Estados Unidos',
    },
    {
      value: 'JP',
      label: 'Japão',
    },
    {
      value: 'PT',
      label: 'Portugal',
    },
  ];

  const handleChange = (event) => {
    setGen(event.target.value);
    console.log(gen)
  };

  const handleChangeC = (event) => {
    setCountry(event.target.value);
  };

    return (
      <>
        <Styled.Container>
          <Styled.Content>
          <img src={logo} width="30%" alt="" />
          <FormControl style={{width:'90%'}} >
            { errorName ? <TextField label={'Nome'} type="text" id="registroNome" margin="dense" error helperText="Incorrect entry."/> : 
            <TextField label={'Nome'} type="text" id="registroNome" margin="dense"/> }
            <Styled.FormRegistro>
                <TextField
                  id="registroGenero"
                  select
                  label="Gênero"
                  value={gen}
                  onChange={handleChange}
                  helperText="Selecione seu gênero"
                >
                  {gens.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="registroPais"
                  select
                  label="Pais"
                  value={country}
                  onChange={handleChangeC}
                  helperText="Selecione seu país"
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                
            </Styled.FormRegistro>
            { errorEmail ? <TextField label={'E-mail'} type="email" id="registroEmail" margin="dense" error helperText="Incorrect entry." /> : <TextField label={'E-mail'} type="email" id="registroEmail"  margin="dense" /> }
            { errorPasswd ? <TextField label={'Senha'} type="password" id="registroSenha" margin="dense"  error helperText="Incorrect entry." /> : <TextField label={'Senha'} type="password" id="registroSenha" margin="dense" />}
          </FormControl>
            <Styled.ButtonLoginContent>
              <Button onClick={ () => authentication()} variant="outlined" size="medium" color="error">
                Cadastrar
              </Button>
              <Button onClick={ () => navigate('/') } variant="outlined" size="medium" color="error">
                Voltar
              </Button>
            </Styled.ButtonLoginContent>
          </Styled.Content>
        </Styled.Container>
      </>
  );
}