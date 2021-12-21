import Link from "next/link";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <div>
          <div className={classes.logo}>
            <h1>
              <Link href="/">
                <a>Vaibhav Kushwaha</a>
              </Link>
            </h1>
          </div>
          <nav className={classes.nav}>
            <ul className={classes.navlist}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="https://github.com/sketchomania">Github</Link>
              </li>
              <li>
                <button>Light/Dark</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainNavigation;
