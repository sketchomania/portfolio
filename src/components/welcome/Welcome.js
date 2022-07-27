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
    <Section row nopadding>
      <LeftSection>
        <UnderlineGrow>
          <SectionTitle main center>
            {strings.fullName}
          </SectionTitle>
        </UnderlineGrow>
        <SectionText>{strings.sayHi}</SectionText>
        <UnderlineGrow>
          <SectionSubText>{strings.shortIntro}</SectionSubText>
        </UnderlineGrow>
        <Button onClick={() => (window.location = "https://google.com")}>
          Learn more
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Welcome;
