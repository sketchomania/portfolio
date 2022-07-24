import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
  list-style-type: none;
  display: flex;
  /* padding: 1rem; */
  /* padding: 0.5rem; */

  /* border: 1px solid red; */

  li {
    padding: 4px;
    /* border: 1px solid red; */
    transition: 0.2s ease;
    /* border-radius: 3rem; */
    &:hover {
      /* background-color: #212d45; */
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
