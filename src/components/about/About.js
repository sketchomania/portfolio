import Strings from "../../constants/strings";
import {
  GradBorder,
  HeaderThree,
  LinkText,
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
  UnderlineGrow,
} from "../../styles/GlobalComponents";
import ContactIcons from "../contact/ContactIcons";
import ContactMe from "../contact/ContactMe";
import {
  FlexDiv,
  SectionContainer,
  SectionPointsContainer,
} from "../resume/ResumeStyles";

const About = () => {
  return (
    <>
      <Section>
        <>
          <UnderlineGrow lar>
            <SectionTitle main>About Me</SectionTitle>
          </UnderlineGrow>
          <br />
          <hr />
          <br />
          <UnderlineGrow>
            <SectionText>{Strings.aboutSubtext}</SectionText>
          </UnderlineGrow>
        </>

        <>
          <br />
          <SectionSubText>{Strings.aboutSubtext1}</SectionSubText>
          <SectionSubText>{Strings.aboutSubtext2}</SectionSubText>
          <SectionSubText>{Strings.aboutSubtext3}</SectionSubText>
          <SectionSubText>{Strings.aboutSubtext4}</SectionSubText>
          <br />
        </>

        <>
          <br />
          <HeaderThree title pb>
            {Strings.interest}
          </HeaderThree>
          <SectionSubText>{Strings.interestSubTex}</SectionSubText>
          <SectionPointsContainer>
            {Strings.interestList.map((item) => (
              <li style={{ maxWidth: "max-content" }} key={item}>
                <SectionSubText>{item}</SectionSubText>
              </li>
            ))}
          </SectionPointsContainer>
          <br />
        </>

        <>
          <br />
          <HeaderThree title pb>
            {"Fun fact"}
          </HeaderThree>
          <SectionSubText>{"I love my pet 🐾"}</SectionSubText>
          <br />
        </>

        <>
          <br />
          <SectionSubText>
            {Strings.knowMore}
            <LinkText>{"my resume"}</LinkText>
            {" page."}
          </SectionSubText>
          <br />
        </>

        <>
          <ContactMe />
        </>

        <>
          <hr />
          <br />
          <UnderlineGrow>
            <SectionTitle>{"Resume"}</SectionTitle>
          </UnderlineGrow>
          <br />
          <SectionSubText>
            {"Pdf version of the resume can be found here → "}
            {
              <LinkText href={"/vaibhav_kushwaha_resume.pdf"}>
                <GradBorder>{"Resume"}</GradBorder>
              </LinkText>
            }
          </SectionSubText>
          <br />
          <br />
        </>
      </Section>
    </>
  );
};

export default About;
