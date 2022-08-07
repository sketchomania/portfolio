import React from "react";

import Layout from "../layout/Layout";
import {
  Section,
  SectionText,
  SectionTitle,
  UnderlineGrow,
} from "../styles/GlobalComponents";
import Footer from "../components/footer-copy/Footer";

const About = (props) => {
  return (
    <>
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        <Section>
          <UnderlineGrow lar>
            <SectionTitle main>About Me</SectionTitle>
          </UnderlineGrow>
          <br />
          <hr />
          <SectionText>
            I am a 3rd year student persuing my Bachelor&apos;s degree
          </SectionText>
          <hr />
          <Footer />
        </Section>
      </Layout>
    </>
  );
};

export default About;
