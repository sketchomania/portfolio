import MainNavigation from "../components/header/MainNavigation";
import Footer from "../components/footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
