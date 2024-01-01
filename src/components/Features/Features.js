import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiSupport, BiDollar } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";

import { Section, Container } from "../../GlobalStyle";

import {
  FeatureTextWrapper,
  FeatureTitle,
  FeatureWrapper,
  FeatureBox,
  FeatureImageWrapper,
  FeatureName,
  FeatureText,
} from "./FeaturesStyles";

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

const featuresData = [
  {
    name: "Best Security",
    description:
      "We offer the best data security to our clients, which makes us stand out",
    icon: iconStyle(BsFillShieldLockFill),
    imgClass: "one",
  },
  {
    name: "Ease of Use",
    description: "Our system is easy to use and integrate",
    icon: iconStyle(IoIosOptions),
    imgClass: "two",
  },
  {
    name: "Maintenance",
    description:
      "Our code is written in highest standards, which makes it highly sustainable",
    icon: iconStyle(GrHostMaintenance),
    imgClass: "three",
  },
  {
    name: "24/7 Support",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(BiSupport),
    imgClass: "four",
  },
  {
    name: "Price",
    description: "We offer the highest value/cost ratio",
    icon: iconStyle(BiDollar),
    imgClass: "five",
  },
  {
    name: "Scalable",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed ",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six",
  },
];

const Features = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };

  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>What We Offer</FeatureTitle>

          <FeatureWrapper>
            {featuresData.map((featureData, index) => (
              <FeatureBox
                key={index}
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5 + index * 0.1 }}
              >
                <FeatureImageWrapper> {featureData.icon}</FeatureImageWrapper>
                <FeatureName>{featureData.name}</FeatureName>
                <FeatureText>{featureData.description}</FeatureText>
              </FeatureBox>
            ))}
          </FeatureWrapper>
        </FeatureTextWrapper>
      </Container>
    </Section>
  );
};

export default Features;
