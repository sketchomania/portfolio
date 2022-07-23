import React from "react";
import Projects from "../components/projects/Projects";
import Layout from "../layout/Layout";

const Project = (props) => {
  return (
    <>
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        <Projects />
      </Layout>
    </>
  );
};

export default Project;
