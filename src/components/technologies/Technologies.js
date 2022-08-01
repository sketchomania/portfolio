import {
  Section,
  SectionText,
  SectionTitle,
  UnderlineGrow,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import Image from "next/image";
import LinkedinIcon from "../../assets/social/linkedin.svg";
import Strings from "../../constants/strings";

const Technologies = () => (
  <Section>
    <UnderlineGrow lar>
      <SectionTitle main>{Strings.technologies}</SectionTitle>
    </UnderlineGrow>
    <SectionText>{Strings.technologiesDescription}</SectionText>
    <List>
      <ListItem>
        <Image src={LinkedinIcon} alt="LinkedinIcon" height={48} />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Image src={LinkedinIcon} alt="LinkedinIcon" height={48} />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
