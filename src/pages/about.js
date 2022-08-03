import React from "react";

import Timeline from "../components/timeline/TimeLine";
import Technologies from "../components/technologies/Technologies";
import Layout from "../layout/Layout";
import Acomplishments from "../components/acomplishments/Acomplishments";
import { Section } from "../styles/GlobalComponents";
import Footer from "../components/footer-copy/Footer";

const About = (props) => {
  return (
    <>
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        <Section>
          <Timeline />
          <hr />
          <Acomplishments />
          <hr />
          <Technologies />
          <hr />
          <Footer />
        </Section>
      </Layout>
    </>
  );
};

export default About;
