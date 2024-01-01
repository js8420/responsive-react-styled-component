import { Heading, TextWrapper } from "../../GlobalStyle";
import { pricingData } from "./PricingData";

import {
  PricingSection,
  PricingContainer,
  PricingTitle,
  SubHeading,
  PricingOptions,
  PricingPlan,
  Plan,
  Price,
  FeaturesList,
  Features,
  PricingStarted,
  Button,
} from "./PricingStyle";

const Pricing = () => {
  return (
    <PricingSection>
      <PricingContainer>
        <PricingTitle>
          <Heading>Pick Your Best Option</Heading>
          <TextWrapper mb="1.4rem" weight="600" size="1.1rem">
            Create, maintain and store your data with Delta
          </TextWrapper>
        </PricingTitle>

        <PricingOptions>
          {pricingData.map((data, index) => (
            <PricingPlan key={index}>
              <Plan>{data.option}</Plan>
              <Price>{data.price}</Price>
              <FeaturesList>
                {data.features.map((feature, index) => (
                  <Features key={index}>{feature}</Features>
                ))}
              </FeaturesList>

              <PricingStarted>
                <Button>Get Started</Button>
              </PricingStarted>
            </PricingPlan>
          ))}
        </PricingOptions>
      </PricingContainer>
    </PricingSection>
  );
};
export default Pricing;
