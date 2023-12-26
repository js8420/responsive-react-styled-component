import styled from "styled-components";
import { Button } from "../../GlobalStyle";

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  position: absolute; // To keep other components on the top
  top: 0;
  z-index: -1; // To keep other components on the top
`;

export const HeroText = styled.p`
  color: #fff;
  text-align: center;
  line-height: 24px;
  letter-spacing: 2px;
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.8vw, 1.3rem);
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-flow: wrap;
`;

// Meaning: Use "HeroButton" but inherit all the properties from the "Button". However, those properties will be overwritten by the properties defined below.
export const HeroButton = styled(Button)`
  color: black;

  &:before {
    background: #fff;
    height: 500%;
  }

  &:hover:before {
    height: 0%;
  }

  &:hover {
    color: white;
  }
`;
