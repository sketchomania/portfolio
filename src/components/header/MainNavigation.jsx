import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../assets/social/github.svg";
import LinkedinIcon from "../../assets/social/linkedin.svg";
// import styles from "./MainNavigationStyles.js";
import {
  Div1,
  Div2,
  Container,
  NavLink,
  Li,
  Div3,
  SocialIcons,
} from "./MainNavigationStyles";
import routes from "../../constants/routes";

const MainNavigation = () => {
  return (
    <>
      <Container>
        <Div1>
          {routes
            .filter((item) => item.index)
            .map((route) => (
              <Link tabindex={route.id} key={route.label} href={route.path}>
                <a
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "brown",
                  }}
                >
                  {route.label}
                </a>
              </Link>
            ))}
        </Div1>
        <Div2>
          {routes
            .filter((item) => !item.index)
            .map((route) => (
              <Li key={route.label}>
                <Link tabindex={route.id} href={route.path}>
                  {/* <NavLink>{route.label}</NavLink> */}
                  <a>{route.label}</a>
                </Link>
              </Li>
            ))}
        </Div2>
        <Div3>
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
          <SocialIcons href="https://github.com">
            <Image height={48} width={48} src={LinkedinIcon} alt="github" />
          </SocialIcons>
        </Div3>
      </Container>
    </>
  );
};

export default MainNavigation;
