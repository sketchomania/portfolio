import React from "react";

import Technologies from "../components/technologies/Technologies";
import Layout from "../layout/Layout";
import {
  Section,
  SectionSubText,
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
          <SectionText>
            I am a 3rd year student persuing my Bachelor&apos;s degree
          </SectionText>
          <Technologies />
          <hr />
          <Footer />
          <hr />
          <Section>
            <SectionTitle>Contact Me</SectionTitle>
            <SectionText>Contact Me</SectionText>
            <SectionSubText>Contact Me </SectionSubText>
            <SectionSubText>Email: vaibhavvast6529@gmail</SectionSubText>
          </Section>
        </Section>
      </Layout>
    </>
  );
};

export default About;
