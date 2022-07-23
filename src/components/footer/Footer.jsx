import Link from "next/link";
// import Image from "next/image";
// import social from "./social.json";
import classes from "./Footer.module.css";
import ContactIcons from "../contact/ContactIcons";
// import { LinkItem } from "../footer-copy/FooterStyles";

// import GithubIcon from "../../assets/social/github.svg";
// import TwitterIcon from "../../assets/social/twitter.svg";
// import LinkedinIcon from "../../assets/social/linkedin.svg";
// import EmailIcon from "../../assets/social/gmail.svg";

// const icons = {
//   Github: GithubIcon,
//   Twitter: TwitterIcon,
//   Email: EmailIcon,
//   Linkedin: LinkedinIcon,
// };

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div>
          <span>
            {" "}
            Copyright © {new Date().getFullYear()} | 👨‍💻🛠💛 by{" "}
              {/* <LinkItem>Vaibhav</LinkItem> */}
            <span >
              <Link
                href="https://github.com/sketchomania"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vaibhav
              </Link>
            </span>
          </span>
        </div>
        <div>
          <ContactIcons />
        </div>
      </footer>
    </>
  );
};

export default Footer;
