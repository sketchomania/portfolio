import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4px;
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
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0px 15px 10px -15px rgba(80, 78, 78, 1);
  }
`;
