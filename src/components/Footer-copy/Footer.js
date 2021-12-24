import React from "react";

import Image from "next/image";
import GithubIcon from "../../assets/social/github.svg";
import LinkedinIcon from "../../assets/social/linkedin.svg";
import { SocialIcons } from "../header/MainNavigationStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel: 111-111-111-1">111-111-111-1</LinkItem>
      </LinkList>
      <LinkList>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:vaibhavvast6529@gmail.com">
          vaibhavvast6529@gmail.com
        </LinkItem>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com">
            <Image height={48} width={48} src={GithubIcon} alt="github" />
          </SocialIcons>
          <SocialIcons href="https://github.com">
            <Image height={48} width={48} src={GithubIcon} alt="github" />
          </SocialIcons>
          <SocialIcons href="https://github.com">
            <Image height={48} width={48} src={LinkedinIcon} alt="github" />
          </SocialIcons>
          <SocialIcons href="https://github.com">
            <Image height={48} width={48} src={GithubIcon} alt="github" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
