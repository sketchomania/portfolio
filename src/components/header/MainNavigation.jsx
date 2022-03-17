import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../assets/social/github.svg";
import LinkedinIcon from "../../assets/social/linkedin.svg";

import ContactIcons from "../contact/ContactIcons";
// import styles from "./MainNavigationStyles.js";
// show theme button
// use this component as bottom navigatot as well change button to show according to device
import {
  Div1,
  Div2,
  Div3,
  Container,
  NavLink,
  Li,
  SocialIcons,
} from "./MainNavigationStyles";
import routes from "../../constants/routes";

const MainNavigation = ({ toggleTheme, theme }) => {
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
          <button
            style={{
              margin: "4px",
              padding: "6px",
              // alignItems: "center",
              // textDecoration: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌒" : "☀️"}
          </button>
          <SocialIcons href="https://github.com">
            <Image height={48} width={48} src={GithubIcon} alt="github" />
          </SocialIcons>
          <SocialIcons href="https://github.com">
            <Image height={48} width={48} src={LinkedinIcon} alt="github" />
          </SocialIcons>
        </Div3>
        {/* <Div3>
          <ContactIcons />
        </Div3> */}
      </Container>
    </>
  );
};

export default MainNavigation;
