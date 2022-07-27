import Link from "next/link";
import React from "react";

import Layout from "../layout/Layout";
import {
  GradBorder,
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
  UnderlineGrow,
} from "../styles/GlobalComponents";

const NotFound = (props) => (
  <>
    <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
      <Section
        style={{
          height: "80vh",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <UnderlineGrow alt>
          <SectionTitle main>404 Page Not Found !</SectionTitle>
        </UnderlineGrow>
        <SectionSubText>
          You just hit a route that doesn&#39;t exist....😕
        </SectionSubText>
        <SectionSubText>
          The link you followed may broken, or this page may have been removed.
        </SectionSubText>
        <UnderlineGrow>
          <Link href="/">
            <a>
              <GradBorder>
                <SectionSubText>➡ Home Page ⬅</SectionSubText>
              </GradBorder>
            </a>
          </Link>
        </UnderlineGrow>
        <SectionText style={{ fontSize: "4rem" }}>👋</SectionText>
        <br />
      </Section>
    </Layout>
  </>
);

export default NotFound;
