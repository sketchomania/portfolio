import React from "react";

import {
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
  UnderlineGrow,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./WelcomeStyles";
import strings from "../../constants/strings";

const Welcome = () => {
  return (
    <Section>
      <UnderlineGrow lar>
        <SectionTitle main>
          {strings.fullName}
        </SectionTitle>
      </UnderlineGrow>
      {/* <LeftSection> */}
        <SectionText>{strings.sayHi}</SectionText>
        <SectionText>{strings.sayHi}</SectionText>
        <UnderlineGrow>
        <SectionText>{strings.sayHi}</SectionText>
          <SectionSubText>{strings.shortIntro}</SectionSubText>
        </UnderlineGrow>
        <br />
        <Button onClick={() => (window.location = "https://google.com")}>
          Learn more
        </Button>
      {/* </LeftSection> */}
    </Section>
  );
};

export default Welcome;
