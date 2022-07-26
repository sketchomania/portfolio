import React from "react";
import Layout from "../layout/Layout";
import {
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
  UnderlineGrow,
} from "../styles/GlobalComponents";

const NotFound = (props) => (
  <>
    <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
      <Section>
        <UnderlineGrow alt>
          <SectionTitle main>Not FOUND</SectionTitle>
        </UnderlineGrow>
        <SectionText>
          You just hit a route that doesn&#39;t exist....😐
        </SectionText>
        <UnderlineGrow>
          <SectionSubText>👉 Home Page</SectionSubText>
        </UnderlineGrow>
        <br/>
        <SectionSubText>👋</SectionSubText>
      </Section>
    </Layout>
  </>
);

export default NotFound;
