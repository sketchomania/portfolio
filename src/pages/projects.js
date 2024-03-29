import React from "react";
import Layout from "../layout/Layout";
import Projects from "../components/projects/Projects";

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
