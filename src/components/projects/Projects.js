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
import Cell from "./cell/Cell";
import data from "../../constants/projects";
import Strings from "../../constants/strings";

const Projects = () => {
  return (
    <Section>
      <UnderlineGrow alt>
        <SectionTitle main>{Strings.projects}</SectionTitle>
      </UnderlineGrow>
      <SectionSubText>{Strings.projectsDescription}</SectionSubText>
      <GridContainer>
        {data.map(
          ({ id, image, title, subtitle, visit, source, desc, tags, date }) => (
            <BlogCard key={id}>
              <GradBorder>
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title={title}>
                    <GradText>{title}</GradText>
                  </HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{subtitle}</CardInfo>
                <div>
                  <TitleContent>🛠 Stack</TitleContent>
                  <Hr />
                  <TagList>
                    {tags.map((tag, i) => (
                      <UnderlineGrow key={i}>
                        <Tag key={i}>{tag}</Tag>
                      </UnderlineGrow>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={source}>Code</ExternalLinks>
                  <ExternalLinks href={visit}>Live</ExternalLinks>
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
