import React from "react";
import { Container } from "./styled";
import Header from "../../components/Header";
import BackGroundImages from "../../components/BackGroundImages";

export default function SignUp() {
  return (
    <Container>
      <BackGroundImages />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Seires, Filmes e muito mais!</h1>
            <h4>Assista de qualquer canto. cancela a qualquer momento</h4>
            <h6>Pronto para assistir? Entre ou se torne assinante</h6>
          </div>

          <div className="form">
            <input
              type="email"
              placeholder="Coloque seu email aqui"
              name="email"
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              name="password"
            />
            <button>Vamos começar</button>
          </div>
          <button>Login</button>
        </div>
      </div>
    </Container>
  );
}
