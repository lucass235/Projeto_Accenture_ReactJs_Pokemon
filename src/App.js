import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login,
  Home,
  Cart,
  NotFound,
  Profile,
  Register,
} from './pages';

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
    </BrowserRouter>
  );
};

export default App;
