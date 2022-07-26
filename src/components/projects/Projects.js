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
  Section,
  SectionTitle,
  UnderlineGrow,
} from "../../styles/GlobalComponents";
import Cell from "./cell/Cell";
import data from "../../constants/projects";

const Projects = () => {
  return (
    <Section nopadding>
      <UnderlineGrow alt>
        <SectionTitle main>Projects</SectionTitle>
      </UnderlineGrow>
      <GridContainer>
        {data.map(
          ({ id, image, title, subtitle, visit, source, desc, tags, date }) => (
            <BlogCard key={id}>
              {/* <GradBorder> */}
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title={title}>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{subtitle}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <GradBorder key={i}>
                        <Tag key={i}>{tag}</Tag>
                      </GradBorder>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={source}>Code</ExternalLinks>
                  <ExternalLinks href={visit}>Live</ExternalLinks>
                </UtilityList>
              {/* </GradBorder> */}
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
