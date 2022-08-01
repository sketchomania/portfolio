import React from "react";
import ContactIcons from "../components/contact/ContactIcons";
import Layout from "../layout/Layout";
import {
  Section,
  SectionTitle,
  UnderlineGrow,
} from "../styles/GlobalComponents";

const Resume = (props) => {
  return (
    <>
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        <Section>
          <UnderlineGrow lar>
            <SectionTitle>Resume</SectionTitle>
          </UnderlineGrow>
          <ContactIcons />
        </Section>
      </Layout>
    </>
  );
};

export default Resume;
