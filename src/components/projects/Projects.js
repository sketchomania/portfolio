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
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Cell from "./cell/Cell";
import data from "../../constants/projects";

const Projects = () => {
  return (
    <Section nopadding>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {data.map(
          ({ id, image, title, subtitle, visit, source, desc, tags, date }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{subtitle}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Code</ExternalLinks>
                <ExternalLinks href={visit}>Live</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
{
  /* 
    {data.map((project) => (
        <Cell 
            key={project}
            data={project.title
        />
    ))}
  */
}
