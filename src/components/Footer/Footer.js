import { Section } from "../../GlobalStyle";

import logo from "../../assets/logo.png";
import { socialMedia, footerData } from "./FooterData";

import {
  FooterWrapper,
  FooterGrid,
  FooterMainRow,
  FooterLogo,
  Image,
  FooterLogoText,
  FooterAddress,
  MediaIcon,
  FooterSocial,
  FooterSubColumns,
  RowTitle,
  FooterLinkColumns,
  FooterLinks,
  FooterRights,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid>
          <FooterMainRow>
            <FooterLogo to="/">
              <Image src={logo} alt="logo" />
              <FooterLogoText>Delta</FooterLogoText>
            </FooterLogo>
            <FooterAddress>
              69 Street, Delta Building, US Road, Los Angeles 123
            </FooterAddress>
            <FooterSocial>
              {socialMedia.map((media, index) => (
                <MediaIcon key={index}>{media.icon}</MediaIcon>
              ))}
            </FooterSocial>
          </FooterMainRow>

          {footerData.map((data, index) => (
            <FooterSubColumns key={index}>
              <RowTitle>{data.column}</RowTitle>
              <FooterLinkColumns>
                {data.links.map((link, index) => (
                  <FooterLinks key={index}>{link}</FooterLinks>
                ))}
              </FooterLinkColumns>
            </FooterSubColumns>
          ))}
        </FooterGrid>
      </FooterWrapper>

      <FooterRights>Delta © 2021</FooterRights>
    </Section>
  );
};

export default Footer;
