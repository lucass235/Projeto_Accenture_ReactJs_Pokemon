import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login,
  Home,
  Cart,
  NotFound,
  Profile,
  Register,
} from './pages';

import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/carrinho" element={ <Cart /> } />
        <Route path="/perfil" element={ <Profile /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
