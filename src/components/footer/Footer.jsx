import Link from "next/link";

import ContactIcons from "../contact/ContactIcons";
import { Div1, Div2, FooterComponent, Text } from "./FooterStyles";
import { GradText } from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <Div1>
          <span>
            {" "}
            Copyright © {new Date().getFullYear()} • 👨‍💻🛠💛 by{" "}
            {/* <LinkItem>Vaibhav</LinkItem> */}
            <span>
              <Link href="/" passHref>
                <a>
                  <GradText>
                    <Text>Vaibhav</Text>
                  </GradText>
                  {"🚀"}
                </a>
              </Link>
            </span>
          </span>
        </Div1>
        <Div2>
          <ContactIcons />
        </Div2>
      </FooterComponent>
    </>
  );
};

export default Footer;
