import data from "../../constants/projects";
import Strings from "../../constants/strings";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionTitle,
  SectionSubText,
  HeaderThree,
  GradText,
  GradBorder,
  UnderlineGrow,
} from "../../styles/GlobalComponents";

const Projects = () => {
  return (
    <Section>
      <UnderlineGrow lar>
        <SectionTitle main>{Strings.projects}</SectionTitle>
      </UnderlineGrow>
      <br />
      <UnderlineGrow sml>
        <SectionSubText>{Strings.projectsDescription}</SectionSubText>
      </UnderlineGrow>
      <GridContainer>
        {data.map(
          ({ id, image, title, subtitle, visit, source, desc, tags, date }) => (
            <BlogCard key={id}>
              <GradBorder>
                <TitleContent>
                  <HeaderThree title>
                    <GradText>{title}</GradText>
                  </HeaderThree>
                  {/* <Hr /> */}
                </TitleContent>
                <Img src={image} alt={`•${title} project Image`} />
                <CardInfo>🎯{subtitle}</CardInfo>
                <Hr />
                <div>
                  <TitleContent>----- 🛠 Stack -----</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <UnderlineGrow key={i} sml>
                        <Tag key={i}>•{tag}</Tag>
                      </UnderlineGrow>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks target={"_blank"} href={source}>
                    📚 Code
                  </ExternalLinks>
                  <ExternalLinks target={"_blank"} href={visit}>
                    ▶ Live
                  </ExternalLinks>
                </UtilityList>
              </GradBorder>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
