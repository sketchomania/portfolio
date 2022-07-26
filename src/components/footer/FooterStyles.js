import styled from "styled-components";

export const FooterComponent = styled.footer`
  display: flex;
  flex: 1;
  padding: 3rem 1rem;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const Div1 = styled.div`
  order: 1;
  @media ${(props) => props.theme.breakpoints.md} {
    order: 2;
  }
`;

export const Div2 = styled.div`
  order: 2;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 5px;
    order: 1;
  }
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 1.8rem;
  transition: 0.1s ease;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    font-size: 2rem;
    cursor: pointer;
  }
`;
