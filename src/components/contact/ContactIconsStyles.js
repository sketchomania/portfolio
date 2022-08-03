import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-wrap: wrap;
    padding-right: 16px;
    justify-content: center;
  }
`;

export const Li = styled.li`
  padding: 4px;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
