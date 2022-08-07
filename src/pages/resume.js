import React from "react";
import Layout from "../layout/Layout";
import Resume from "../components/resume/Resume";

const MyResume = (props) => {
  return (
    <>
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        <Resume />
      </Layout>
    </>
  );
};

export default MyResume;
