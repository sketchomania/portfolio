import MainNavigation from "../components/header/MainNavigation";
import Footer from "../components/footer/Footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <MainNavigation toggleTheme={props.toggleTheme} theme={props.theme} />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
