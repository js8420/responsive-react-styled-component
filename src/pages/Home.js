// Contains 4 components: Hero, Feature, Content, and Carousel

import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";
import {
  contentOne,
  contentTwo,
  contentThree,
} from "../components/Content/ContentData";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...contentOne} />
      <Content {...contentTwo} />
      <Content {...contentThree} />
      <Carousel />
    </>
  );
};
export default Home;
