import MainNavigation from "../components/header/MainNavigation";
import Footer from "../components/footer/Footer";
import { Container, Main } from "./LayoutStyles";

const Layout = (props) => {
  return (
    <Container>
      <MainNavigation toggleTheme={props.toggleTheme} theme={props.theme} />
      <Main>{props.children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
