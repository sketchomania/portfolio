import data from "../../constants/projects";
import Strings from "../../constants/strings";
import skills from "../../constants/resume/skills";
import positions from "../../constants/resume/positions";
import resumeData from "../../constants/resume/resumeData";
import {
  FlexDiv,
  SectionContainer,
  SectionPointsContainer,
  SectionTextMedium,
} from "./ResumeStyles";
import {
  Section,
  SectionTitle,
  SectionSubText,
  HeaderThree,
  LinkText,
  UnderlineGrow,
} from "../../styles/GlobalComponents";

const Resume = () => {
  return (
    <>
      <Section>
        <UnderlineGrow lar>
          <SectionTitle main>{Strings.resume}</SectionTitle>
        </UnderlineGrow>
        <br />
        <hr />

        <>
          <br />
          <HeaderThree title pb>
            {"Vaibhav Kushwaha"}
          </HeaderThree>
          <SectionSubText>
            I am Vaibhav Kushwaha, I live in Varanasi
          </SectionSubText>
          <SectionPointsContainer>
            <li key={1}>
              <SectionSubText>
                {"I am a Computer Science and Engineering Student"}
              </SectionSubText>
            </li>
            <li key={2}>
              <SectionSubText>{"CGPA: 7.9"}</SectionSubText>
            </li>
          </SectionPointsContainer>
        </>

        <>
          <br />
          <HeaderThree title pb>
            Experience
          </HeaderThree>
          {positions.map((position) => (
            <article>
              <SectionTextMedium>{`${position.role} - ${position.company}`}</SectionTextMedium>
              <SectionSubText>{position.timeline}</SectionSubText>
              <SectionSubText>{position.summary}</SectionSubText>
              <SectionPointsContainer>
                {position.points.map((point) => (
                  <li key={point}>
                    <SectionSubText>{point}</SectionSubText>
                  </li>
                ))}
              </SectionPointsContainer>
              <FlexDiv>
                <SectionSubText
                  style={{ fontWeight: 700, marginRight: "2rem" }}
                >
                  {"Technology Stack: "}
                </SectionSubText>
                <SectionSubText>
                  {position.techStack.map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </SectionSubText>
              </FlexDiv>
              <br />
            </article>
          ))}
        </>

        <>
          <br />
          <HeaderThree title pb>
            {"Projects"}
          </HeaderThree>
          {data.map((project) => (
            <article>
              <SectionSubText>{project.title}</SectionSubText>
              <SectionSubText>{project.subtitle}</SectionSubText>
            </article>
          ))}
        </>

        <>
          <br />
          <HeaderThree title pb>
            {"Relevant Skills"}
          </HeaderThree>
          {skills.map((skill) => (
            <article>
              <SectionContainer>
                <SectionSubText
                  style={{ fontWeight: 700, marginRight: "2rem" }}
                >
                  {skill.type}
                </SectionSubText>
                <SectionSubText>
                  {skill.typeList.map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </SectionSubText>
              </SectionContainer>
              <hr />
              <br />
            </article>
          ))}
        </>

        <>
          <br />
          <HeaderThree title pb>
            {"Education"}
          </HeaderThree>
          <SectionSubText style={{ fontWeight: 700 }}>
            {"Kashi Institute of Technology"}
          </SectionSubText>
          <SectionSubText>{"August 2019 - July 2023"}</SectionSubText>
          <SectionPointsContainer>
            <li key={1}>
              <SectionSubText>
                {"Computer Science and Engineering"}
              </SectionSubText>
            </li>
            <li key={2}>
              <SectionSubText>{"CGPA: 7.9"}</SectionSubText>
            </li>
          </SectionPointsContainer>
          <br />
        </>

        <>
          <hr />
          <br />
          <SectionSubText>{"Updated on August 2022."}</SectionSubText>
          <SectionSubText>
            Pdf version of the above resume can be found -----here
          </SectionSubText>
          <br />
        </>
      </Section>
    </>
  );
};

export default Resume;
