import React from "react";

import Layout from "../layout/Layout";
import About from "../components/about/About";

const AboutMe = (props) => {
  return (
    <>
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        <About />
      </Layout>
    </>
  );
};

export default AboutMe;
