import React from "react";
import {
  LinkText,
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
  UnderlineGrow,
} from "../../styles/GlobalComponents";

// import Image from "next/image";
// import GithubIcon from "../../assets/social/github.svg";
// import LinkedinIcon from "../../assets/social/linkedin.svg";
// import { SocialIcons } from "../header/MainNavigationStyles";
import ContactIcons from "../contact/ContactIcons";
import {
  FooterWrapper,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Section>
      <UnderlineGrow lar>
        <SectionTitle>Contact Me</SectionTitle>
      </UnderlineGrow>
      <br />
      <FooterWrapper>
        <LinkList>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vaibhavvast6529@gmail.com">
            vaibhavvast6529@gmail.com
          </LinkItem>
        </LinkList>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
