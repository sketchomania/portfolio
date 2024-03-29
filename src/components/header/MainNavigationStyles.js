import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 3rem 1rem;
  background: ${(props) => props.theme.bg.blurBackground};
  /* background: linear-gradient(
    90deg,
    ${(props) => props.theme.bg.gradStartBlur} 25%,
    ${(props) => props.theme.bg.gradEndBlur} 80%
  ); */
  position: fixed;
  backdrop-filter: blur(16px);
  z-index: 5;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / 2 / 4;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  flex-direction: row;
  align-content: center;
  /* overflow: hidden; */
  @media ${(props) => props.theme.breakpoints.md} {
    flex-wrap: wrap;
    grid-area: 2 / 1 / 3 / 6;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 5 / 2 / 6;
  }
`;

export const NameContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 4rem;
  padding: 0.5rem;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  &:hover {
    text-shadow: none;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const SocialIcons = styled.span`
  display: flex;
  transition: 0.1s ease;
  font-size: 2rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.bg.textNoHover};
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    color: ${(props) => props.theme.bg.textHover};
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: auto;
  }
`;
