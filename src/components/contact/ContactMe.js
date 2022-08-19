import Strings from "../../constants/strings";
import {
  LinkText,
  SectionTitle,
  SectionSubText,
  UnderlineGrow,
} from "../../styles/GlobalComponents";
import { FlexDiv } from "../resume/ResumeStyles";
import ContactIcons from "./ContactIcons";

const ContactMe = () => {
  return (
    <>
      <hr />
      <br />
      <UnderlineGrow>
        <SectionTitle>{Strings.contact}</SectionTitle>
      </UnderlineGrow>
      <br />
      <SectionSubText>{Strings.contactSubText}</SectionSubText>
      <FlexDiv>
        <SectionSubText style={{ fontWeight: 700, marginRight: "4rem" }}>
          {"Email:"}
        </SectionSubText>
        <SectionSubText>
          <LinkText href="mailto:vaibhavvast6529@gmail.com">
            {Strings.email}
          </LinkText>
        </SectionSubText>
      </FlexDiv>
      {/* <FlexDiv> */}
      <SectionSubText style={{ fontWeight: 700 }}>
        {Strings.alternateContact}
      </SectionSubText>
      <ContactIcons />
      {/* </FlexDiv> */}
      <br />
      <br />
    </>
  );
};

export default ContactMe;
