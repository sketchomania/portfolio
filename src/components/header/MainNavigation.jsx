import Link from "next/link";

import {
  Div1,
  Div2,
  Div3,
  Container,
  Li,
  SocialIcons,
  NameContainer,
} from "./MainNavigationStyles";
import routes from "../../constants/routes";
import {
  GradText,
  UnderlineGrow,
} from "../../styles/GlobalComponents";

const MainNavigation = ({ toggleTheme, theme }) => {
  return (
    <>
      <Container>
        <Div1>
          {routes
            .filter((item) => item.index)
            .map((route) => (
              <Link tabindex={route.id} key={route.label} href={route.path}>
                <a>
                  <NameContainer>
                    <GradText>{route.label}</GradText>
                  </NameContainer>
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
                  <a>
                    <UnderlineGrow>
                      <SocialIcons>{route.label}</SocialIcons>
                    </UnderlineGrow>
                  </a>
                </Link>
              </Li>
            ))}
        </Div2>
        <Div3>
          <Li>
            <button
              style={{
                margin: "4px",
                padding: "6px",
                fontSize: "3rem",
                alignItems: "center",
                // textDecoration: "none",
                border: "none",
                backgroundColor: "transparent",
              }}
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌒" : "🌞"}
            </button>
          </Li>
        </Div3>
      </Container>
    </>
  );
};

export default MainNavigation;
