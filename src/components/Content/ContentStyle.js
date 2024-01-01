import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentRow = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  /* gap: 30px; */
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px -15px -15px -15px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContentColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1; // flex-gow: 1; flex-shrink: 1; flex-basis: 0

  margin-bottom: 15px;
  padding: 0 15px 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  max-width: 540px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;

    > h1,
    p {
      text-align: center;
    }

    display: flex;
    flex-direction: column;
    text-align: center;
  }

  > img {
    width: 300px;
    margin-left: -3px;
  }
`;

export const TopLine = styled(motion.div)`
  color: #979797;
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
`;

export const Heading = styled(motion.h2)`
  color: ${({ inverse }) => (inverse ? "#0c4577" : "white")};

  font-size: 3rem;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled(motion.p)`
  color: ${({ inverse }) => (inverse ? "#6a6a6a" : "white")};

  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
`;

export const ContentButton = styled(motion.button)`
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;

  color: ${({ inverse }) => (inverse ? "#0c4577" : "white")};

  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid ${({ inverse }) => (inverse ? "#0c4577" : "white")};
  position: relative;
  overflow: hidden;

  &:before {
    background: ${({ inverse }) => (inverse ? "#0c4577" : "white")};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 0%;
    width: 100%;
    transform: translate(-50%, -50%) rotate(45deg);
    z-index: -1;
    transition: all 0.6s ease;
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: ${({ inverse }) => (inverse ? "white" : "black")};
  }
`;

export const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  max-height: 700px;
  position: relative;
`;

export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-height: 700px;
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
  object-fit: cover;
  z-index: 1;
`;
