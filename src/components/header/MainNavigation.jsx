import Link from "next/link";
// import Image from "next/image";

// import ContactIcons from "../contact/ContactIcons";
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
import {
  SectionSubText,
  SectionText,
  UnderlineGrow,
} from "../../styles/GlobalComponents";
// import { useTheme } from "styled-components";

const MainNavigation = ({ toggleTheme, theme }) => {
  // const { theme2, setTheme2 } = useTheme();
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
                    fontWeight: 500,
                    fontSize: 20,
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
                  <a>
                    <UnderlineGrow>
                      <p style={{ margin: 6, fontWeight: 300, fontSize: 18 }}>
                        {route.label}
                      </p>
                    </UnderlineGrow>
                    {/* <SocialIcons>{route.label}</SocialIcons> */}
                  </a>
                </Link>
              </Li>
            ))}
        </Div2>
        <Div3>
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
            {theme === "light" ? "🌒" : "☀️"}
          </button>
        </Div3>
      </Container>
    </>
  );
};

export default MainNavigation;
