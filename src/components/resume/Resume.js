import data from "../../constants/projects";
import Strings from "../../constants/strings";
import {
  SectionContainer,
  SectionNameContainer1,
  SectionNameContainer2,
  SectionPointsContainer,
  SectionTextMedium,
} from "./ResumeStyles";
import {
  HeaderThree,
  LinkText,
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
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
            <SectionNameContainer1>Vaibhav Kushwaha <LinkText>Say Hi</LinkText></SectionNameContainer1>
        <SectionContainer>
            <SectionNameContainer2 >Summary, Vaibhav Kushwaha</SectionNameContainer2>
            <SectionNameContainer1>Summary, Vaibhav Kushwaha</SectionNameContainer1>

        </SectionContainer>
        <hr />
        <SectionContainer>
            <SectionText style={{fontWeight: 600}}>Summary, Vaibhav Kushwaha</SectionText>
            <HeaderThree >Vaibhav Kushwaha</HeaderThree>
        </SectionContainer>
        <SectionContainer>
            <HeaderThree >Vaibhav Kushwaha</HeaderThree>
            <SectionText style={{fontWeight: 600}}>Summary, Vaibhav Kushwaha</SectionText>
        </SectionContainer>
        <hr />
        <SectionContainer>
          <div>
            <SectionNameContainer1>Vaibhav Kushwaha</SectionNameContainer1>
            <SectionNameContainer2 >Summary, Vaibhav Kushwaha</SectionNameContainer2>
            <SectionText style={{fontWeight: 600}}>Summary, Vaibhav Kushwaha</SectionText>
            <SectionTextMedium>Summary, Vaibhav <LinkText>Kushwaha</LinkText></SectionTextMedium>
          </div>
          <div>
            <SectionNameContainer2 >Summary, Vaibhav Kushwaha</SectionNameContainer2>
            <SectionText >Summary, Vaibhav Kushwaha</SectionText>
            <SectionText>Summary, Vaibhav Kushwaha</SectionText>
            <SectionText>Summary, Vaibhav Kushwaha</SectionText>
            <SectionText>Summary, Vaibhav Kushwaha</SectionText>
          </div>
        </SectionContainer>
        <hr />
        <hr />
        <SectionText>
          <LinkText>Hi</LinkText>
          about jbblaectionTitle main/SejbblaectionTitle jbblaectionTitle
          main/SejbblaectionTitle
        </SectionText>
        <SectionPointsContainer>
          
        <ul>
          <li>
            <SectionSubText>
              jbblaectionTitle main/SejbblaectionTitle main/SejbblaectionTitle
              main/SejbblaectionTitle main/Se
            </SectionSubText>
          </li>
          <li>
            jbbla jbblaectionTitle main/SejbblaectionTitle
            main/SejbblaectionTitle main/SejbblaectionTitle main/Se
          </li>
          <li>
            <SectionSubText>
              Vaibhav Kushwaha jbblaectionTitle main/SejbblaectionTitle
              main/SejbblaectionTitle main/SejbblaectionTitle main/Se
            </SectionSubText>
          </li>
          <SectionSubText>Vaibhav Kushwaha</SectionSubText>
        </ul>
        </SectionPointsContainer>
          <SectionContainer>
            <div>

          <SectionNameContainer2 >Summary, Vaibhav Kushwaha</SectionNameContainer2>
            <SectionText >Summary, Vaibhav Kushwaha</SectionText>
            <SectionText>Summary, Vaibhav Kushwaha</SectionText>
            <SectionText>Summary, Vaibhav Kushwaha</SectionText>
            <SectionText>Summary, Vaibhav Kushwaha</SectionText>
            </div>
          </SectionContainer>
      </Section>
    </>
  );
};

export default Resume;
