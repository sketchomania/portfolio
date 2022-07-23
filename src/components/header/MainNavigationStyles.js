import styled from "styled-components";
import Colors from "../../constants/colors";

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 3rem 1rem;
  border: 1px solid gray;

  /* position: fixed;
  top: 0;
  left: 0;
  max-width: 1080px;
  width: 100%; */

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  flex-direction: row;
  align-content: center;
  /* overflow: hidden; */
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 6;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 2rem;
  color: #0070f3;
  transition: 0.3s ease;
  &:hover {
    color: #761dcee7;
    opacity: 1;
    cursor: pointer;
  }
`;
export const Li = styled.li`
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: auto;
    /* padding: 0.5rem; */
  }
`;

// Social
export const SocialIcons = styled.span`
  display: flex;
  transition: 0.1s ease;
  font-size: 2rem;
  margin: auto;
  /* color: white; */
  color: ${Colors.sunsetOrange};
  background-color: yellowgreen;
  border-radius: 3rem;
  padding: 0.5rem;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    color: ${Colors.green};
    /* opacity: 1; */
  }
`;
