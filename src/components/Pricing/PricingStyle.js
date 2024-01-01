import styled from "styled-components";
import { Container, Section } from "../../GlobalStyle";

export const PricingSection = styled(Section)`
  color: #fff;
  padding: 160px 0;
  background: #101522;
`;

export const PricingContainer = styled(Container)`
  padding: 0;
`;

export const PricingTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const PricingOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    margin: 0.7rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
      width: 80%;
    }
  }
`;

export const PricingPlan = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  text-decoration: none;
  border-radius: 4px;
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: auto;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.06);
  }
`;

export const Plan = styled.h3`
  font-size: 2rem;
  margin-bottom: 5px;
`;

export const Price = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  color: #a9b3c1;
  margin: 16px 0 32px;
`;

export const Features = styled.li`
  font-size: 0.94rem;
  margin-bottom: 1rem;

  &:before {
    content: "🎧";
    margin-right: 0.4rem;
  }
`;

export const PricingStarted = styled.div`
  margin-top: auto;
`;

export const Button = styled.button`
  font-size: 1.1rem;
  padding: 10px 0;
  margin-top: auto;
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: 2px solid white;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;
