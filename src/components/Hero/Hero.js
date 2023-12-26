import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../GlobalStyle";

import {
  ButtonWrapper,
  HeroButton,
  HeroSection,
  HeroText,
  HeroVideo,
} from "./HeroStyle";

import heroVideo from "../../assets/hero.mp4";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src={heroVideo} autoPlay muted loop />
      <Container>
        <MainHeading>Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};
export default Hero;
