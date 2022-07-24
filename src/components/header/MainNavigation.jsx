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
                  <a>
                    <SocialIcons>{route.label}</SocialIcons>
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
              // alignItems: "center",
              // textDecoration: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌒" : "☀️"}
          </button>
          {/* <button
            type="button"
            style={{
              margin: "4px",
              padding: "6px",
              fontSize: "3rem",
              border: "none",
              backgroundColor: "transparent",
            }}
            onClick={() => setTheme2(theme2 === "light" ? "dark" : "light")}
          >
            {theme2 === "light" ? "🌒" : "☀️"}
          </button> */}
        </Div3>
        {/* <Div3>
          <ContactIcons />
        </Div3> */}
      </Container>
    </>
  );
};

export default MainNavigation;
