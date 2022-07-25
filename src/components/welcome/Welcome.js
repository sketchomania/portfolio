import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  UnderlineGrow,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./WelcomeStyles";

const Welcome = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <UnderlineGrow>
          <SectionTitle main center>
            Vaibhav Kushwaha
          </SectionTitle>
        </UnderlineGrow>
        <SectionText>I&apos;m Vaibhav Kushwaha 👋</SectionText>
        <UnderlineGrow>
          <p>
            I am a developer trying to learn new technologies, sharing my
            experience and knowledge
          </p>
        </UnderlineGrow>
        <Button onClick={() => (window.location = "https://google.com")}>
          Learn more
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Welcome;
