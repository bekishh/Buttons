import React from "react";
import { styled } from "styled-components";
import './Button.css'

export const Button = () => {
  const outlined = () => {
    document.getElementById("1").classList="howerButton"
    document.getElementById("2").classList="normalButton"
    document.getElementById("3").classList="activeButton"
    document.getElementById("4").classList="disabledButton"
  };

  const contained = () => {
    document.getElementById("1").classList="howerButton2"
    document.getElementById("2").classList="normalButton2"
    document.getElementById("3").classList="activeButton2"
    document.getElementById("4").classList="disabledButton2"
  };
  
  const warning = () => {
    document.getElementById("1").classList="howerButton3"
    document.getElementById("2").classList="normalButton3"
    document.getElementById("3").classList="activeButton3"
    document.getElementById("4").classList="disabledButton3"
  };

  const danger = () => {
    document.getElementById("1").classList="howerButton4"
    document.getElementById("2").classList="normalButton4"
    document.getElementById("3").classList="activeButton4"
    document.getElementById("4").classList="disabledButton4"
  };

  return (
    <StyledButtonContainer>
      <div>
        <button id="1" className="howerButton">:HOWER</button>
        <button id="2" className="normalButton">:NORMAL</button>
        <button id="3" className="activeButton">:ACTIVE</button>
        <button id="4" className="disabledButton">DISABLED</button>
      </div>
      <form>
        <h3 onClick={outlined}>OUTLINED</h3>
        <h3 onClick={contained}>CONTAINED</h3>
        <h3 onClick={warning}>WARNING</h3>
        <h3 onClick={danger}>DANGER</h3>
      </form>
    </StyledButtonContainer>
  );
};

const StyledButtonContainer = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  & div {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  & form {
    display: flex;
    gap: 35px;
  }
  & h3 {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.54px;
    cursor: pointer;
  }
`;

export default Button;