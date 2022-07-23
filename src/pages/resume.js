import React from "react";
import ContactIcons from "../components/contact/ContactIcons";
import Layout from "../layout/Layout";

const Resume = (props) => {
  return (
    <>
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        {"Resume"}
        <ContactIcons />
      </Layout>
    </>
  );
};

export default Resume;
