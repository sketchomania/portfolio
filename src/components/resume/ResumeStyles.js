import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionTextMedium = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  padding-bottom: 1.5rem;
  color: ${(props) => props.theme.bg.sectionText};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionPointsContainer = styled.ul`
  padding-left: 2rem;
`;

export const FlexDiv = styled.div`
  display: flex;
`;
