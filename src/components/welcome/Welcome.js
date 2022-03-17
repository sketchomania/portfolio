import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./WelcomeStyles";

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>Hi Vaibhav Kushwaha here 🙋‍♂️</SectionText>
        <p>
          I am a developer trying to learn new technologies, sharing my
          experience and knowledge
        </p>
        <Button onClick={() => (window.location = "https://google.com")}>
          Learn more
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
