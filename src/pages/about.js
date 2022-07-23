import React from "react";
import Timeline from "../components/timeline/TimeLine";
import Layout from "../layout/Layout";

const About = (props) => {
  return (
    <>
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        <Timeline />
      </Layout>
    </>
  );
};

export default About;
