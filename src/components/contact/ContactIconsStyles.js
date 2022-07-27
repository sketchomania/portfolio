import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
  list-style-type: none;
  display: flex;
  li {
    padding: 4px;
    transition: 0.2s ease;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
