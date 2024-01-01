import styled from "styled-components";
import { Row } from "../../GlobalStyle";
import Slider from "react-slick";

export const CarouselRow = styled(Row)`
  margin: 0 10px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

export const ButtonContainer = styled(Row)`
  gap: 10px;

  & svg {
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;
  height: 480px;
  padding: 10px;
`;

export const CarouselColumn = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height: 430px;

  @media screen and (max-width: 440px) {
    border: 1px solid #bebebe;
  }
  border: 1px solid #000;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  object-position: right;
  vertical-align: middle;
`;

export const CardButton = styled.button`
  background-color: #1d609c;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  margin: auto 0 0;
  padding: 5px 10px;
  border: none;
  border-radius: 0 0 10px 10px;

  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
