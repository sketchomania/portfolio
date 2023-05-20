import React from "react";

import {
  LinkText,
  Section,
  SectionSubText,
  SectionTitle,
  UnderlineGrow,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import strings from "../../constants/strings";
import positions from "../../constants/resume/positions";

const Welcome = () => {
  return (
    <Section>
      <UnderlineGrow lar>
        <SectionTitle main>{strings.fullName}</SectionTitle>
      </UnderlineGrow>
      <br />

      <>
        <UnderlineGrow sml>
          <SectionSubText>
            {strings.sayHi}
            <LinkText href={positions[0].link} target={"_blank"}>
              {positions[0].company}
            </LinkText>
            {strings.shortIntro1}
          </SectionSubText>
        </UnderlineGrow>
        <br />
        <SectionSubText>
          {/* <br /> */}
          {strings.shortIntro2}
        </SectionSubText>
        {/* <br /> */}
        <SectionSubText>{strings.shortIntro3}</SectionSubText>
        <br />
        <SectionSubText>
          {strings.shortIntro4}
          <LinkText href={"/artworks"}>{"Artworks"}</LinkText>.
        </SectionSubText>
        <br />
        <br />
        <Button onClick={() => (window.location = "/about")}>
          {"Know more"}
        </Button>
      </>
    </Section>
  );
};

export default Welcome;
