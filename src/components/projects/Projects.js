import data from "../../constants/projects";
import Strings from "../../constants/strings";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  GradBorder,
  GradText,
  Section,
  SectionDivider,
  SectionSubText,
  SectionTitle,
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
                  <HeaderThree title={title}>
                    <GradText>{title}</GradText>
                  </HeaderThree>
                  {/* <Hr /> */}
                </TitleContent>
                <Img src={image} />
                <CardInfo>🎯{subtitle}</CardInfo>
                <Hr />
                <div>
                  <TitleContent>----- 🛠 Stack -----</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <UnderlineGrow key={i} sml>
                        <Tag key={i}>{tag}</Tag>
                      </UnderlineGrow>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks target="_blank" href={source}>
                    📚 Code
                  </ExternalLinks>
                  <ExternalLinks target="_blank" href={visit}>
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
