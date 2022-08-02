import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  transition: 0.3s;
  &:hover {
    width: 415px;
    transform: scale(1.1);
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.bg.gradStart} 0%,
    ${(props) => props.theme.bg.gradEnd} 100%
  );
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 2rem;
  color: ${(props) => props.theme.bg.sectionText};
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.5rem 1rem;
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.bg.sectionSubText};
  font-size: 1.5rem;
  padding: 0 0.6rem;
  &:hover{
    color: ${(props) => props.theme.bg.textNoHover};  
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.bg.sectionText};
  font-size: 1.6rem;
  padding: 0.6rem 1.5rem;
  transition: 0.5s;
  border: 1.8px solid cyan;
  border-image: linear-gradient(
      90deg,
      ${(props) => props.theme.bg.gradStart} 0%,
      ${(props) => props.theme.bg.gradEnd} 100%
    )
    1;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
