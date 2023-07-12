import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
  .body {
    gap: 1rem;
    .text {
      gap: 1rem;
      text-align: center;
      font-size: 2rem;
      h1 {
        padding: 0 25rem;
      }
    }
  }
  .form {
    display: grid;
    /* grid-template-columns */
    width: 60%;
    input {
      color: black;
      border: none;
      padding: 1, 5rem;
      font-size: 1.2rem;
      border: 1px solid black;
      &:focus {
        outline: none;
      }
    }
    button {
    }
  }
`;
