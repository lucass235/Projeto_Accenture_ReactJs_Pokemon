import React from 'react';

export default function Chart() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form>
          <label htmlFor="email">email</label>
          <input type="mail" />
          <label htmlFor="password">senha</label>
          <input type="password" />
             
        </form>
        <a href="\"><div>Esqueci minha senha</div></a>
        <div><a href="\">Cadastre-se</a></div>

      </div>
    </div>
  );
};
