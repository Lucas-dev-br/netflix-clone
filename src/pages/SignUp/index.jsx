import React, { useState } from "react";
import { Container } from "./styled";
import Header from "../../components/Header";
import BackGroundImages from "../../components/BackGroundImages";
import { firebaseAuth } from "../../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassoword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {}
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
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
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Digite sua senha"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassoword(true)}>
                Vamos começar
              </button>
            )}
          </div>
          <button onClick={handleSignIn}>Registrar</button>
        </div>
      </div>
    </Container>
  );
}
