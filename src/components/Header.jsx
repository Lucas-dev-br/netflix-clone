import React from "react";
import styled from "styled-components";
import logo from "../assets/logoNetflix.png";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  return (
    <Container className="flex a-center j-beetween">
      <div className="logo">
        <img src={logo} />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/cadastro")}>
        {props.login ? "Entrar" : "Registrar-se"}
      </button>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  padding: 0 4rem;
  justify-content: space-between;
  .logo {
    img {
      height: 5rem;
    }
  }
  
`;
