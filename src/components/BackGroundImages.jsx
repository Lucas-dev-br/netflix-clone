import React from "react";
import background from "../assets/background.jpg";

// Style
import styled from "styled-components";

function BackGroundImages() {
  return (
    <Container>
      <img src={background} alt="" />
    </Container>
  );
}

export default BackGroundImages;

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  img {
    height: 100vh;
    width: 100%;
  }
`;
