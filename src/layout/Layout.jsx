import MainNavigation from "../components/header/MainNavigation";
import Footer from "../components/footer/Footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <h2>hii</h2>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
      <h2>hii</h2>
    </div>
  );
};

export default Layout;
