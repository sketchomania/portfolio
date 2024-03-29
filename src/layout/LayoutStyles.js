import styled from "styled-components";

export const Container = styled.div`
  max-width: 1020px;
  width: 100%;
  margin: auto;
  color: Colors;
`;

export const Main = styled.main`
  background-color: ${(props) => props.theme.bg.body};
  /* border: 1px solid gray; */
  padding-top: 11.5rem;
  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 16rem;
  }
`;
