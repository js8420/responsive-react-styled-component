import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  /* align-items: center; */
`;

export const FooterMainRow = styled.div`
  padding: 10px 0 0 20px;
  @media screen and (max-width: 999px) {
    align-items: center;
    grid-column: 1/-1;
  }
`;

export const FooterLogo = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 16px;
  cursor: pointer;

  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    margin-left: 0px;
    justify-content: left;
    margin-right: 1rem;
  }
`;

export const Image = styled.img`
  width: 40px;
`;

export const FooterLogoText = styled.span`
  font-size: 2rem;
`;

export const FooterAddress = styled.p`
  color: #fff;
  max-width: 20rem;
  margin: 0.4rem auto 0.4rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 2;
  text-align: center;

  @media screen and (min-width: 1000px) {
    margin-left: 0px;
    text-align: left;
    margin-right: 1rem;
  }
`;

export const FooterSocial = styled.div`
  color: #fff;
  font-size: 24px;

  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    margin-left: 0px;
    justify-content: left;
    margin-right: 1rem;
  }
`;

export const MediaIcon = styled.div``;

export const FooterSubColumns = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

export const RowTitle = styled.h2`
  color: #fff;
  margin-bottom: 16px;
`;

export const FooterLinkColumns = styled.div`
  display: flex;
  flex-direction: column;

  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

export const FooterLinks = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0467fb;
  }
`;

export const FooterRights = styled.div`
  color: #fff;
  max-width: 1280px;
  margin: 0 auto;
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid #2d3748;
`;
