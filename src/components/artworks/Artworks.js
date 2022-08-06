import data from "../../constants/artworks";
import Strings from "../../constants/strings";
import { ArtImgContainer } from "./ArtworksStyles";
import {
  GradBorder,
  GradText,
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
  UnderlineGrow,
} from "../../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Tag,
  TagList,
  TitleContent,
} from "../projects/ProjectsStyles";

const Artworks = () => {
  return (
    <Section style={{ minHeight: "100vh" }}>
      <UnderlineGrow lar>
        <SectionTitle main>{Strings.artworks}</SectionTitle>
      </UnderlineGrow>
      <br />
      <UnderlineGrow>
        <SectionText>{Strings.artworksDesc1}</SectionText>
      </UnderlineGrow>
      <SectionSubText>{Strings.artworksDesc2}</SectionSubText>
      <SectionSubText>{Strings.artworksDesc3}</SectionSubText>
      <GridContainer>
        {data.map(({ id, title, subtitle, link, tags, date }) => (
          <BlogCard key={id}>
            <GradBorder>
              <TitleContent>
                <HeaderThree title>
                  <GradText>{title}</GradText>
                </HeaderThree>
              </TitleContent>
              <ArtImgContainer src={link} alt={`🖼 ${title} Image`} />
              <CardInfo>✍{subtitle}</CardInfo>
              <TitleContent>------- 🎨 tools used -------</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </GradBorder>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Artworks;
